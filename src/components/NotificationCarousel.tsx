import React from "react";
import { Bell } from "lucide-react";
import "../styles/NotificationCarousel.css";

const notificationCards = [
  {
    icon: <Bell className="icon" />,
    action: "Save",
    message: "We'll be sending notifications to you here",
    email: "hello@gmail.com",
  },
  {
    icon: (
      <div className="bar-icon">
        <div className="bar h2"></div>
        <div className="bar h3"></div>
        <div className="bar h4"></div>
      </div>
    ),
    action: (
      <div className="circle-action">
        <svg className="check-icon" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    ),
    message: "Notify me when any wallets move more than",
    amount: "$1,000.00",
  },
  {
    icon: (
      <div className="rotate-icon-outer">
        <div className="rotate-icon-inner"></div>
      </div>
    ),
    action: (
      <div className="circle-action">
        <svg className="check-icon" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    ),
    message: "Notify me when any wallet dormant for",
    duration: "> 30 days",
    action_text: "becomes active",
  },
];

const NotificationCarousel: React.FC = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {[...notificationCards, ...notificationCards].map((card, index) => (
          <div key={index} className="carousel-card">
            <div className="card-header">
              {card.icon}
              {typeof card.action === "string" ? (
                <button className="text-action-button">{card.action}</button>
              ) : (
                card.action
              )}
            </div>
            <div className="card-body">
              <p className="card-message">{card.message}</p>
              {card.email && <p className="card-email">{card.email}</p>}
              {card.amount && <p className="card-amount">{card.amount}</p>}
              {card.duration && (
                <>
                  <p className="card-duration">{card.duration}</p>
                  <p className="card-action-text">{card.action_text}</p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationCarousel;
