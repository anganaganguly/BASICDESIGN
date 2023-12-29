import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TextAdDataPage.css';


const TextAdDataPage = () => {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/create-ad');
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/ads-submitted');
        setTimeout(() => {
            navigate('/create-ad');
        }, 600);
    };
    

    return (
    <div className="text-ad-data-page">
        <h2>Create Text and Media</h2>
        <form className="form-container" onSubmit={handleSubmit}>
            <div className="left-section">
                <div className="form-group">
                <label htmlFor="heading01">Heading 01:</label>
                <input type="text" id="heading01" name="heading01" placeholder="Add a heading that would make users interested" />
                </div>
                <div className="form-group">
                <label htmlFor="heading02">Heading 02:</label>
                <input type="text" id="heading02" name="heading02" placeholder="Add a heading that would make users interested" />
                </div>
                <div className="form-group">
                <label htmlFor="businessName">Business Name:</label>
                <input type="text" id="businessName" name="businessName" placeholder="Add your business name"/>
                </div>
                <div className="form-group">
                <label htmlFor="websiteUrl">Website URL:</label>
                <input type="text" id="websiteUrl" name="websiteUrl" placeholder=" Add the URL, of the landing page you want to redirect users to" />
                </div>
            </div>
            <div className="right-section">
                <div className="form-group1">
                    <label htmlFor="description01">Description 01:</label>
                    <textarea id="description01" name="description01" placeholder='Add primary text to help users understand more about products, services or offers'></textarea>
                </div>
                <div className="form-group1">
                    <label htmlFor="buttonLabel">Button Label:</label>
                    <select id="buttonLabel" name="buttonLabel" placeholder=" Select a label that best suits your ad" >
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                    </select>
                    <div className='back-button'>
                        <button type="button" onClick={handleBack}>Back</button>
                    </div>
                    <div className='submit-button'>
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
    );
};

export default TextAdDataPage;
