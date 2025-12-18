import React from "react";
import "./Welcome.css";

const Welcome = () => {
  return (
    <section className="welcome-section">
      <div className="welcome-left">
        <h2>You are Welcome Here!</h2>

        <p>
          New here? Get ready to experience a warm family of love, where 
          you’re empowered to embrace greatness in life while serving God 
          and humanity. At our core, we believe in living and leading differently.
        </p>

        <button className="welcome-btn">Join our Family</button>
      </div>

      {/* <div className="welcome-right">
        <img 
          src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80" 
          alt="children in church" 
        />
      </div> */}
    </section>
  );
};

export default Welcome;
