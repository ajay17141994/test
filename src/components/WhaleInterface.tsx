import React from "react";
import "../styles/WhaleInterface.css";

const timeframes = [
  "Max",
  "5 Y",
  "4 Y",
  "3 Y",
  "2 Y",
  "1 Y",
  "6 M",
  "1 M",
  "1 Week",
  "1 Day",
];

const topMetrics = [
  { icon: "💰", title: "Total net worth", value: "$585.37m", change: "ETH" },
  { icon: "⭐", title: "Average net worth", value: "$146.34m", change: "ETH" },
  { icon: "🏆", title: "Largest holding", value: "Tether", isToken: true },
];

const bottomMetrics = [
  { icon: "🛒", title: "Most frequently purchased token", token: "Avalanche" },
  { icon: "💸", title: "Most frequently sold token", token: "Avalanche" },
  { icon: "📊", title: "Largest Holding", token: "Avalanche" },
  { icon: "🛒", title: "Largest volume bought token", token: "Avalanche" },
  { icon: "💸", title: "Largest volume sold token", token: "USD Coin" },
];

const WhaleInterface: React.FC = () => {
  return (
    <div className="whale-card">
      <div className="whale-inner">
        {/* Header */}
        <div className="whale-header">
          <div className="whale-avatar-group">
            <div className="avatar red">A</div>
            <div className="avatar purple overlap">V</div>
            <div className="whale-label">
              <h3 className="label-title">AVAX Whales</h3>
              <p className="label-sub">Added 07/02/23</p>
            </div>
          </div>
          <button className="edit-button">Edit</button>
        </div>

        {/* Top Metrics */}
        <div className="grid three-cols">
          {topMetrics.map((metric, index) => (
            <div key={index} className="metric-card">
              <div className="metric-header">
                <span className="metric-icon">{metric.icon}</span>
                <span className="metric-title">{metric.title}</span>
              </div>
              <div className="metric-body">
                <p className="metric-value">{metric.value}</p>
                {metric.change && (
                  <p className="metric-change">{metric.change}</p>
                )}
                {metric.isToken && (
                  <div className="token-label">
                    <div className="token-dot green"></div>
                    <span className="token-text">Tether</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Trends Section */}
        <div className="trends">
          <p className="trends-title">📈 Trends</p>
          <div className="timeframes">
            {timeframes.map((t, i) => (
              <button
                key={i}
                className={`timeframe-btn ${t === "1 Day" ? "active" : ""}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Metrics */}
        <div className="grid three-cols">
          {bottomMetrics.slice(0, 3).map((m, i) => (
            <div key={i} className="metric-card">
              <div className="metric-header">
                <span className="metric-icon">{m.icon}</span>
              </div>
              <div className="metric-body">
                <p className="metric-title">{m.title}</p>
                <div className="token-label">
                  <div className="token-dot red"></div>
                  <span className="token-text">{m.token}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid two-cols">
          {bottomMetrics.slice(3).map((m, i) => (
            <div key={i} className="metric-card">
              <div className="metric-header">
                <span className="metric-icon">{m.icon}</span>
              </div>
              <div className="metric-body">
                <p className="metric-title">{m.title}</p>
                <div className="token-label">
                  <div
                    className={`token-dot ${
                      m.token === "USD Coin" ? "blue" : "red"
                    }`}
                  ></div>
                  <span className="token-text">{m.token}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhaleInterface;
