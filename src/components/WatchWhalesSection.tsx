import React from "react";
import { Eye } from "lucide-react";
import "../styles/WatchWhalesSection.css";

const WatchWhalesSection: React.FC = () => {
  return (
    <div className="watch-whales-container">
      <div className="watch-whales-content">
        <Eye className="watch-icon" />
        <h2 className="watch-title">Watch what the whales are doing</h2>
        <p className="watch-description">
          All whales are not equal. Know exactly what the whales impacting{" "}
          YOUR portfolio are doing.
        </p>
      </div>
    </div>
  );
};

export default WatchWhalesSection;
