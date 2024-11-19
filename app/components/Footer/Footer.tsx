export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>
            &copy; {new Date().getFullYear()} Uzma Azam. All rights reserved.
          </p>
          <div className="social-links">
            <a href="#" className="social-link">
              GitHub
            </a>
            <a href="#" className="social-link">
              LinkedIn
            </a>
            <a href="#" className="social-link">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
