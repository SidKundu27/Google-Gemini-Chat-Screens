// import Image from "next/image";
// import styles from "./page.module.css";

// import React from "react";
import "./page.css";

function App() {
  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="header">
        <h1>Hi Kim, I'm Tyce, your Sales Partner.</h1>
        <p>I'm here to help you sell projects.</p>
        <h3>What do you need assistance with today?</h3>
      </header>

      {/* Assistance Buttons */}
      <div className="buttons-container">
        <button className="assist-button">RFP</button>
        <button className="assist-button">Pricing</button>
        <button className="assist-button">Marketing</button>
        <button className="assist-button">Contract</button>
      </div>

      {/* Input Section */}
      <div className="input-container">
        <input
          type="text"
          placeholder="Let me know how I can help you!"
          className="input-box"
        />
        <p className="add-docs-text">
          Add documents (meeting notes, client briefings) to start a new project
        </p>
      </div>

      {/* Top Deals Section */}
      <section className="top-deals">
        <h3>Top deals this quarter</h3>
        <div className="deals-container">
          <DealCard
            title="App Development"
            deals="6"
            revenue="$1M"
            category="Banking"
          />
          <DealCard
            title="ERP"
            deals="10"
            revenue="$5M"
            category="Banking"
          />
          <DealCard
            title="AI POCs"
            deals="7"
            revenue="$500K"
            category="Industrial"
          />
        </div>
      </section>
    </div>
  );
}

function DealCard({ title, deals, revenue, category }) {
  return (
    <div className="deal-card">
      <h4>{title}</h4>
      <p>
        <strong>{deals}</strong> Deals
      </p>
      <p>
        <strong>{revenue}</strong> Revenue
      </p>
      <p className="category">{category}</p>
    </div>
  );
}

export default App;
