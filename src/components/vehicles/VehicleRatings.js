const RatingField = ({ label, value }) => (
  <p className="text-sm">
    {label}: {value}
  </p>
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

const VehicleRatings = ({ ratings, onSelectCar }) => (
  <>
    <div className="mb-2 text-lg font-semibold text-center">
      Rating Information
    </div>
    {ratings.map((ratingField, index) => (
      <div
        key={index}
        onClick={() => onSelectCar(index)}
        className="cursor-pointer"
      >
        <RatingInfoBox ratingField={ratingField} />
      </div>
    ))}
  </>
);

export default VehicleRatings;
