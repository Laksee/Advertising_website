import { useState } from "react";
import RegistrationMark from "./RegistrationMark";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleLinkClick() {
    setIsOpen(false);
  }

  return (
    <header className="nav">
      <div className="container nav__inner">
        <a className="nav__logo" href="#top" onClick={handleLinkClick}>
          <RegistrationMark size={26} />
          <span>ANUBHAV ADVERTISER</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <a className="btn btn--primary" href="#contact">
            Contact us
          </a>
          <button
            className="nav__burger"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav className={`nav__mobile ${isOpen ? "is-open" : ""}`} aria-label="Mobile">
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={handleLinkClick}>
            {link.label}
          </a>
        ))}
        <a href="#contact" onClick={handleLinkClick}>
          Contact Us
        </a>
      </nav>
    </header>
  );
}
