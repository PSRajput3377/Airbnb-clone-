import { Globe, Menu, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <svg
            width="32"
            height="32"
            fill="#FF385C"
            viewBox="0 0 32 32"
            aria-label="Airbnb"
          >
            <path d="M16 .8c.4 0 .9.2 1.2.5 1.6 1.6 3.2 3.2 4.8 4.8.4.4.8.8 1.2 1.2.4.4.8.8 1.2 1.2.4.4.8.8 1.2 1.2.4.4.8.8 1.2 1.2.3.3.5.8.5 1.2v10.9c0 .5-.2.9-.5 1.2-1.6 1.6-3.2 3.2-4.8 4.8-.4.4-.8.8-1.2 1.2-.4.4-.8.8-1.2 1.2-.4.4-.8.8-1.2 1.2-.4.4-.8.8-1.2 1.2-.3.3-.8.5-1.2.5-.5 0-.9-.2-1.2-.5-1.6-1.6-3.2-3.2-4.8-4.8-.4-.4-.8-.8-1.2-1.2-.4-.4-.8-.8-1.2-1.2-.4-.4-.8-.8-1.2-1.2-.4-.4-.8-.8-1.2-1.2-.3-.3-.5-.8-.5-1.2V6.9c0-.5.2-.9.5-1.2C6.7 4.1 8.3 2.5 9.9.9c.4-.4.8-.8 1.2-1.2C11.4.4 11.8 0 12.2 0c.4-.4.8-.8 1.2-1.2.3-.1.8-.1 1.2-.1.4 0 .9.2 1.2.5z"></path>
          </svg>
          <span className="logo-text">airbnb</span>
        </div>

        <nav className="header-nav">
          <button className="nav-link">Places to stay</button>
          <button className="nav-link">Experiences</button>
        </nav>

        <div className="header-right">
          <button className="nav-link">Airbnb your home</button>
          <button className="icon-button" aria-label="Choose language">
            <Globe size={16} />
          </button>
          <button className="profile-button" aria-label="Main menu">
            <Menu size={16} />
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
