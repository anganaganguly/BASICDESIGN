import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateAd.css';


const CreateAd = () => {

  const [isCheckedImage1, setCheckedImage1] = useState(false);
  const [isCheckedImage2, setCheckedImage2] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = (imageNumber) => {
    if (imageNumber === 1) {
      setCheckedImage1(!isCheckedImage1);
      setCheckedImage2(false);
    } else if (imageNumber === 2) {
      setCheckedImage2(!isCheckedImage2);
      setCheckedImage1(false);
    }
  };

  const handleCreateAd = () => {
    
    if (isCheckedImage1 && isCheckedImage2) {
      console.log("Please select only one checkbox at a time.");
    } else if (isCheckedImage1) {
      navigate('/text-ad-data-page');
    } else if (isCheckedImage2) {
      navigate('/media-ad-data-page');
    } else {
      console.log("Please select at least one checkbox before proceeding.");
    }
  };

    return (
        <div className="container1">
            <h2>Create Ad</h2>
            <div className="ad-container">
                <div className="ad-wrapper">
                    <label className="checkbox-label">
                        <input 
                          type="checkbox"  
                          checked={isCheckedImage1}
                          onChange={() => handleCheckboxChange(1)}
                        />
                    </label>
                    <img className="ad-image" src="https://cdn.pixabay.com/photo/2021/06/28/07/16/ads-6370790_1280.png" alt="Text 1"/>
                    <h3>Text AD</h3>
                </div>
                <div className="ad-wrapper">
                    <label className="checkbox-label">
                        <input 
                          type="checkbox"
                          checked={isCheckedImage2}
                          onChange={() => handleCheckboxChange(2)} 
                        />
                    </label>
                    <img className="ad-image" src="https://cdn.pixabay.com/photo/2020/04/04/04/23/media-5000790_1280.png" alt="Create 2" />
                    <h3>Media AD</h3>
                </div>
            </div>
            <button className="next-button" onClick={handleCreateAd}>Next</button>

        </div>
    );
}

export default CreateAd;
















