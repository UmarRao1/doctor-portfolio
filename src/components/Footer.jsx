import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-main">

          {/* Doctor Information */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              Dr. Shaukat Ali
            </Link>

            <p className="footer-credentials">
              MD, FACC
            </p>

            <p className="footer-description">
              Interventional Cardiologist and Peripheral
              Interventionalist dedicated to advanced cardiovascular
              care, clinical leadership, and medical education.
            </p>
          </div>

          {/* Navigation */}
          <div className="footer-column">
            <h3>Explore</h3>

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/education">Education</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/achievements">Achievements</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* Professional Information */}
          <div className="footer-column">
            <h3>Professional</h3>

            <span>Interventional Cardiology</span>
            <span>Peripheral Intervention</span>
            <span>Structural Heart Disease</span>
            <span>Clinical Leadership</span>
            <span>Medical Education</span>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Dr. Shaukat Ali. All rights
            reserved.
          </p>

          <p>
            Fresno, California
          </p>

        </div>

      </div>
    </footer>
  )
}

export default Footer