import { groupData } from "./Data";

import React, { useState } from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableSortLabel,
  Paper,
} from '@mui/material';

const AdInsight = () => {
  const [sortBy, setSortBy] = useState('id');
  const [sortOrder, setSortOrder] = useState('asc');


  const handleSort = (property) => {
    const newOrder = sortBy === property && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortBy(property);
    setSortOrder(newOrder);
  };


  const compareValues = (a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];

    if (aValue < bValue) {
      return sortOrder === 'asc' ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortOrder === 'asc' ? 1 : -1;
    }
    return 0;
  };

  
  const sortedGroupData = [...groupData].sort(compareValues);

 
  const totalClicks = sortedGroupData.reduce((acc, campaign) => acc + campaign.clicks, 0);
  const totalCost = sortedGroupData.reduce((acc, campaign) => acc + parseFloat(campaign.cost.replace('USD ', '').replace(',', '')), 0);
  const totalConversions = sortedGroupData.reduce((acc, campaign) => acc + campaign.conversions, 0);
  const totalRevenue = sortedGroupData.reduce((acc, campaign) => acc + parseFloat(campaign.revenue.replace('USD ', '').replace(',', '')), 0);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={sortBy === 'group'}
                  direction={sortOrder}
                  onClick={() => handleSort('group')}
                >
                  Group
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortBy === 'clicks'}
                  direction={sortOrder}
                  onClick={() => handleSort('clicks')}
                >
                  Clicks
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortBy === 'cost'}
                  direction={sortOrder}
                  onClick={() => handleSort('cost')}
                >
                  Cost
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortBy === 'conversions'}
                  direction={sortOrder}
                  onClick={() => handleSort('conversions')}
                >
                  Conversions
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortBy === 'revenue'}
                  direction={sortOrder}
                  onClick={() => handleSort('revenue')}
                >
                  Revenue
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedGroupData.map((group, index) => (
              <TableRow key={index}>
                <TableCell>{group.group}</TableCell>
                <TableCell>{group.clicks}</TableCell>
                <TableCell>{group.cost}</TableCell>
                <TableCell>{group.conversions}</TableCell>
                <TableCell>{group.revenue}</TableCell>
              </TableRow>
            ))}
            {/* Totals Row */}
            <TableRow>
              <TableCell colSpan={1}>Totals</TableCell>
              <TableCell>{totalClicks}</TableCell>
              <TableCell>{`USD ${totalCost.toFixed(2)}`}</TableCell>
              <TableCell>{totalConversions}</TableCell>
              <TableCell>{`USD ${totalRevenue.toFixed(2)}`}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AdInsight;
