import React, { useState } from 'react';
import './SecondPage.css'; // Import CSS for styling

const SecondPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle file upload logic here
    console.log('Selected File:', selectedFile);
    // Reset selected file state
    setSelectedFile(null);
  };

  return (
    <div className="dialog-overlay">
      <div className="dialog">
        <h2>Upload Image</h2>
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleFileChange} />
          <button type="submit">Upload</button>
        </form>
      </div>
    </div>
  );
};

export default SecondPage;
