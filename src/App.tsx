import React from "react";
import NotificationCarousel from "./components/NotificationCarousel";
import NotificationSection from "./components/NotificationSection";
import WhaleInterface from "./components/WhaleInterface";
import WatchWhalesSection from "./components/WatchWhalesSection";
import SignupForm from "./components/SignupForm";
import TestimonialsSection from "./components/TestimonialsSection";
// import Logo from './Logo';
import "./styles/LochLanding.css";

const LochLanding: React.FC = () => {
  return (
    <div className="loch-landing-container">
      <div className="loch-left-section">
        <div className="loch-left-inner">
          <div className="notification-row">
            <div className="whale-major">
              <NotificationSection />
            </div>
            <div className="whale-minor">
              <NotificationCarousel />
            </div>
          </div>

          <div className="whale-row">
            <div className="whale-major">
              <WhaleInterface />
            </div>
            <div className="whale-minor">
              <WatchWhalesSection />
            </div>
          </div>
        </div>

        <div className="testimonial-section">
          <TestimonialsSection />
          {/* <Logo /> */}
        </div>
      </div>

      <div className="loch-right-section">
        <div className="signup-content">
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default LochLanding;
