import RegistrationMark from "./RegistrationMark";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <RegistrationMark size={24} />
            <span>ANUBHAV</span>
          </div>
          <p>Anubhav means "experience." We build outdoor advertising people actually experience — hoardings, banners, and wall media across 18 Indian cities since 2014.</p>
        </div>

        <div className="footer__cols">
          <div>
            <h4>Sitemap</h4>
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <h4>Social</h4>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Instagram
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              LinkedIn
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              X
            </a>
          </div>
          <div>
            <h4>Legal</h4>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Privacy Policy
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {year} Anubhav Advertisers. All rights reserved.</span>
        <span>Gurugram, India</span>
      </div>
    </footer>
  );
}
