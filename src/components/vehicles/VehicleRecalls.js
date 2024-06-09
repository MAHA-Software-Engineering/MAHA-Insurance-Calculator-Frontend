import React, { useState, useEffect } from "react";

const RecallInfoBox = ({ recallItem }) => (
  <div className="p-4 border border-gray-300 rounded">
    <div className="text-lg font-semibold">
      Component: {recallItem.Component}
    </div>
    <p className="text-base">Summary: {recallItem.Summary}</p>
    <p className="text-sm">Consequence: {recallItem.Consequence}</p>
    <p className="text-sm">Remedy: {recallItem.Remedy}</p>
  </div>
);

const VehicleRecalls = ({ recalls, handleRecallTabChange }) => {
  const [activeRecallTab, setActiveRecallTab] = useState(0);

  useEffect(() => {
    setActiveRecallTab(0);
  }, [recalls]);

  const handleSelectChange = (event) => {
    const selectedIndex = event.target.value;
    handleRecallTabChange(selectedIndex);
    setActiveRecallTab(selectedIndex);
  };

  return (
    <>
      <div className="mb-2 text-lg font-semibold text-center">
        Recall Details
      </div>
      {recalls.length > 0 ? (
        <>
          <select onChange={handleSelectChange} value={activeRecallTab}>
            {recalls.map((recall, index) => (
              <option key={index} value={index}>
                {recall.Component}
              </option>
            ))}
          </select>
          {recalls[activeRecallTab] && (
            <div className="pt-3">
              <RecallInfoBox recallItem={recalls[activeRecallTab]} />
            </div>
          )}
        </>
      ) : (
        <p>No recall information available.</p>
      )}
    </>
  );
};

export default VehicleRecalls;
