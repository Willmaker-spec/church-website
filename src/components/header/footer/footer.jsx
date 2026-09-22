import React from "react";
import "./Footer.css";

const footer = () => {
  return (
    <div>
      {/* <!-- FOOTER SECTTION --> */}
      <footer className="footer">
        <div className="footer-container">
          {/* <!-- ABOUT --> */}
          <div className="footer-box">
            <h2>Our Digital Skills Academy</h2>

            <p>
              Empowering students with practical digital skills for a better
              future.
            </p>
          </div>

          {/* <!-- QUICK LINKS --> */}

          <div className="footer-box">
            <h3>Quick Links</h3>

            <a href="#">Home</a>

            <a href="#">About</a>

            <a href="#">Courses</a>

            <a href="#">Contact</a>
          </div>

          {/* <!-- CONTACT --> */}

          <div className="footer-box">
            <h3>Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone: +234 000 000 0000</p>
            <p>Owerri, Imo State</p>
          </div>
        </div>

        {/* <!-- COPYRIGHT --> */}

        <div className="copyright">
          <p>&copy; 2026 Our Digital Skills Academy. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default footer;
