import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MediaAdDataPage.css';

const MediaAdDataPage = () => {
    const navigate = useNavigate();
  
    const handleBack = () => {
      navigate('/create-ad');
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      navigate('/ads-submitted');
      setTimeout(() => {
        navigate('/create-ad');
      }, 3000);
    };
  
    return (
      <div className="text-ad-data-page">
        <h2>Create Text and Media</h2>
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="left-section">
            <div className="form-group">
              <label htmlFor="heading01">Heading 01:</label>
              <input type="text" id="heading01" name="heading01" placeholder="Add a heading for users" />
            </div>
            <div className="form-group">
              <label htmlFor="heading02">Heading 02:</label>
              <input type="text" id="heading02" name="heading02" placeholder="Add another heading for users" />
            </div>
            <div className="form-group">
              <label htmlFor="landscapeMarketing">Landscape Marketing:</label>
              <input type="text" id="landscapeMarketing" name="landscapeMarketing" placeholder="Add landscape marketing details" />
            </div>
            <div className="form-group">
              <label htmlFor="videoUrl">Video URL:</label>
              <input type="text" id="videoUrl" name="videoUrl" placeholder="Add the URL of the video" />
            </div>
            <div className="form-group">
              <label htmlFor="businessName">Business Name:</label>
              <input type="text" id="businessName" name="businessName" placeholder="Add your business name" />
            </div>
            <div className="form-group">
              <label htmlFor="websiteUrl">Website URL:</label>
              <input type="text" id="websiteUrl" name="websiteUrl" placeholder="Add the URL of the landing page" />
            </div>
          </div>
          <div className="right-section">
            <div className="form-group">
              <label htmlFor="description01">Description 01:</label>
              <textarea id="description01" name="description01" placeholder='Add primary text for users'></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="portraitMarketing">Portrait Marketing Image:</label>
              <input type="text" id="portraitMarketing" name="portraitMarketing" placeholder="Add portrait marketing image URL" />
            </div>
            <div className="form-group">
              <label htmlFor="squareMarketing">Square Marketing Image:</label>
              <input type="text" id="squareMarketing" name="squareMarketing" placeholder="Add square marketing image URL" />
            </div>
            <div className="form-group">
              <label htmlFor="buttonLabel">Button Label:</label>
              <select id="buttonLabel" name="buttonLabel" placeholder="Select a label for your ad">
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
              </select>
            </div>
            <div className='back-button'>
              <button type="button" onClick={handleBack}>Back</button>
            </div>
            <div className='submit-button'>
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  };
  
  export default MediaAdDataPage;
  
