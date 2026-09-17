import React from "react";

const App = () => {
  return (
    <div>
      <header>
        <nav className="navbar">
          <ul>
            <li>
              <a href="home ">Home</a>
            </li>
            <li>
              <a href="about">About</a>
            </li>
            <li>
              <a href="services">Services</a>
            </li>
            <li>
              <a href="contact">Contact us</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* <!-- Hero Section --> */}
      <section className="hero">
        <div className="overlay">
          <div className="hero-content">
            <h1>Welcome to My Web Page</h1>
            <p>
              Learn FullStack Devlopment, UI/UX, Graphics Design and many more
              tech careers.
            </p>
            <button>Get Started</button>
          </div>
        </div>
      </section>

      {/* <!-- About Section --> */}
      <section className="about">
        <div className="about-text">
          <h3>ABOUT US</h3>
          <h2>
            Building Skills, <br />
            Building Future
          </h2>
          <p>
            At Morning className digital academy, we offer a wide range of
            courses in web development, UI/UX design, graphics design, and many
            more tech careers. Our experienced instructors are dedicated to
            helping students achieve their goals and succeed in the tech
            industry.
          </p>
          <ul>
            <li>&#10004; Web Development</li>
            <li>&#10004; UI/UX Design</li>
            <li>&#10004; Graphics Design</li>
            <li>&#10004; Digital Marketing</li>
          </ul>
          <a href="about.html" className="btn">
            Learn More
          </a>
        </div>
        <div>
          <img
            src="images/marek-studzinski-8T8QTMRZmEg-unsplash.jpg"
            alt="About Us"
            width="200px"
          />
        </div>
      </section>
      {/* <!-- Testimony Section --> */}
      <section className="testimonials">
        <h4>TESTIMONIES</h4>
        <h2>Feedback From Our Students</h2>
        <div className="testimonials-container">
          <div className="card">
            <img src="images/sunset.jpg" alt="sunset" />
            <h3>Oluchi Iwueze</h3>
            <p>
              This Academy Completely changed my Career. I learnt a lot of
              things that changed my life
            </p>
          </div>
          <div className="card">
            <img src="images/sunset.jpg" alt="sunset" />
            <h3>Oluchi Iwueze</h3>
            <p>
              This Academy Completely changed my Career. I learnt a lot of
              things that changed my life
            </p>
          </div>
          <div className="card">
            <img src="images/sunset.jpg" alt="sunset" />
            <h3>Oluchi Iwueze</h3>
            <p>
              This Academy Completely changed my Career. I learnt a lot of
              things that changed my life
            </p>
          </div>
        </div>
      </section>

      {/* <!-- CALL TO ACTION --> */}
      <section className="cta">
        <div className="cta-content">
          <h2>Ready To Start your Learning Journey?</h2>
          <p>
            Join us today and start learning Practical Digital Skills that can
            transform your future.
          </p>
          <a href="#" className="cta-button">
            Get Started
          </a>
        </div>
      </section>

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

export default App;
