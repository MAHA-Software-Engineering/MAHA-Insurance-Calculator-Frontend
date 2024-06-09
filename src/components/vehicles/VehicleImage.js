/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

const VehicleImage = ({ scrapedData }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    scrapedData.imageUrl && (
      <div className="flex justify-center">
        <div
          className="image-hover-wrapper "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <a
            href={scrapedData.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={scrapedData.imageUrl}
              alt="Car"
              className="max-h-[300px] object-cover rounded shadow"
            />
            <div className="image-hover-overlay" />
            {isHovered && (
              <div className="image-hover-text">Click to see cars for sale</div>
            )}
          </a>
        </div>
      </div>
    )
  );
};

export default VehicleImage;
