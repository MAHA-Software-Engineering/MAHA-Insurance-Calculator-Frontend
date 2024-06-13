import React, { useState, useEffect } from "react";

const RecallInfoBox = ({ recallItem }) => (
  <div className="p-4 border border-gray-300 rounded">
    <div className="text-base">Summary: {recallItem.Summary}</div>
    <ul className="pl-5 list-disc">
      <li className="my-1 text-sm">Consequence: {recallItem.Consequence}</li>
      <li className="py-1 text-sm">Remedy: {recallItem.Remedy}</li>
    </ul>
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
      <div className="mt-2 text-lg font-semibold text-center">
        Recall Details
      </div>
      {recalls.length > 0 ? (
        <>
          <div className="flex justify-center">
            <select
              onChange={handleSelectChange}
              value={activeRecallTab}
              className="w-3/4 overflow-x-auto"
            >
              {recalls.map((recall, index) => (
                <option key={index} value={index}>
                  {recall.Component}
                </option>
              ))}
            </select>
          </div>
          {recalls[activeRecallTab] && (
            <div className="pt-3">
              <RecallInfoBox recallItem={recalls[activeRecallTab]} />
            </div>
          )}
        </>
      ) : (
        <div className="text-center">No recall information available.</div>
      )}
    </>
  );
};

export default VehicleRecalls;
