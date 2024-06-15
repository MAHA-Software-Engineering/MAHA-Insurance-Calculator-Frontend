/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

const VehicleImage = ({ scrapedData }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hasImage = Boolean(scrapedData.imageUrl);

  return (
    <div className="flex justify-center my-3">
      <div
        className="image-hover-wrapper"
        onMouseEnter={() => hasImage && setIsHovered(true)}
        onMouseLeave={() => hasImage && setIsHovered(false)}
      >
        {hasImage ? (
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
        ) : (
          <img
            src="Placeholder.png"
            alt="Car"
            className="max-h-[300px] object-cover rounded shadow cursor-default"
          />
        )}
      </div>
    </div>
  );
};

export default VehicleImage;
