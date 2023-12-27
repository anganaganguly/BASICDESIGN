import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAd = () => {
  const [isCheckedImage1, setCheckedImage1] = useState(false);
  const [isCheckedImage2, setCheckedImage2] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = (imageNumber) => {
    if (imageNumber === 1) {
      setCheckedImage1(!isCheckedImage1);
    } else if (imageNumber === 2) {
      setCheckedImage2(!isCheckedImage2);
    }
  };

  const handleCreateAd = () => {
    // Your logic for creating an ad goes here

    // Redirect based on checkbox selection
    if (isCheckedImage1 && isCheckedImage2) {
      // Redirect if both checkboxes are selected
      navigate('/redirected-route-both');
    } else if (isCheckedImage1) {
      // Redirect if only checkbox for image 1 is selected
      navigate('/redirected-route-image1');
    } else if (isCheckedImage2) {
      // Redirect if only checkbox for image 2 is selected
      navigate('/redirected-route-image2');
    } else {
      // Redirect to another route if no checkboxes are selected
      navigate('/default-route');
    }
  };

  return (
    <div>
      <h2>Create Ad</h2>

      <div>
        <label>
          <input
            type="checkbox"
            checked={isCheckedImage1}
            onChange={() => handleCheckboxChange(1)}
          />
          Image 1
        </label>
        <img src="path/to/image1.jpg" alt="Image 1" />
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={isCheckedImage2}
            onChange={() => handleCheckboxChange(2)}
          />
          Image 2
        </label>
        <img src="path/to/image2.jpg" alt="Image 2" />
      </div>

      {/* Other form fields go here */}

      <button onClick={handleCreateAd}>Create Ad</button>
    </div>
  );
};

export default CreateAd;

