import React from "react";
import Navigation from "../ui/Navigation";

function BaseLayout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {children}
    </div>
  );
}

export default BaseLayout;
