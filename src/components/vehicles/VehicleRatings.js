import React, { useState, useEffect } from "react";

const RatingField = ({ label, value }) => (
  <div className="text-sm">
    {label}: {value}
  </div>
);

const RatingInfoBox = ({ ratingField }) => (
  <div className="p-4 border border-gray-300 rounded">
    <div className="text-lg font-semibold">
      Vehicle: {ratingField.VehicleDescription}
    </div>
    {ratingField.MSRP && <RatingField label="MSRP" value={ratingField.MSRP} />}
    <RatingField label="Overall Rating" value={ratingField.OverallRating} />
    <RatingField
      label="Front Crash Rating"
      value={ratingField.OverallFrontCrashRating}
    />
    <RatingField
      label="Side Crash Rating"
      value={ratingField.OverallSideCrashRating}
    />
    <RatingField label="Rollover Rating" value={ratingField.RolloverRating} />
    <RatingField
      label="Electronic Stability Control"
      value={ratingField.NHTSAElectronicStabilityControl}
    />
    <RatingField
      label="Forward Collision Warning"
      value={ratingField.NHTSAForwardCollisionWarning}
    />
    <RatingField
      label="Lane Departure Warning"
      value={ratingField.NHTSALaneDepartureWarning}
    />
  </div>
);

const VehicleRatings = ({ ratings, onSelectCar }) => {
  const [activeRatingTab, setActiveRatingTab] = useState(0);

  useEffect(() => {
    setActiveRatingTab(0);
  }, [ratings]);

  const handleSelectChange = (event) => {
    const selectedIndex = event.target.value;
    onSelectCar(selectedIndex);
    setActiveRatingTab(selectedIndex);
  };

  return (
    <>
      <div className="mb-2 text-lg font-semibold text-center">
        Rating Information
      </div>
      {ratings.length > 0 ? (
        <>
          <div className="flex justify-center">
            <select onChange={handleSelectChange} value={activeRatingTab}>
              {ratings.map((rating, index) => (
                <option key={index} value={index}>
                  {rating.VehicleDescription}
                </option>
              ))}
            </select>
          </div>
          {ratings[activeRatingTab] && (
            <div className="pt-3">
              <RatingInfoBox ratingField={ratings[activeRatingTab]} />
            </div>
          )}
        </>
      ) : (
        <div className="text-center">No rating information available.</div>
      )}
    </>
  );
};

export default VehicleRatings;
