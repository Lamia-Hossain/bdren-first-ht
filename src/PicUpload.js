import React, { useState } from "react";
import defaultLogo from "./figures/cloud.png";

const PicUpload = () => {
  const [showCard, setShowCard] = useState(false);
  const [logoSrc, setLogoSrc] = useState(defaultLogo);

  const handleButtonClick = () => {
    setShowCard(true);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setLogoSrc(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      {showCard && (
        <div className="w-max">
          <img
            className="w-32 h-32 rounded-full m-5"
            id="survey-logo"
            src={logoSrc}
            alt="Default Logo"
          />
          <label
            className="block w-max bg-slate-600 text-white px-3 py-1 m-3 rounded-lg cursor-pointer"
            htmlFor="input-logo"
          >
            Update Logo
          </label>
          <input
            className="hidden"
            id="input-logo"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
      )}
      <button
        className="m-3 text-blue-800 font-bold"
        onClick={handleButtonClick}
      >
        +Add Logo
      </button>
    </div>
  );
};

export default PicUpload;
