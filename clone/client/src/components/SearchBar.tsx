import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <div className="search-section">
          <label className="search-label">Anywhere</label>
          <input type="text" className="search-input" placeholder="Search destinations" />
        </div>
        <div className="search-divider"></div>
        <div className="search-section">
          <label className="search-label">Any week</label>
          <input type="text" className="search-input" placeholder="Add dates" />
        </div>
        <div className="search-divider"></div>
        <div className="search-section search-section-guests">
          <label className="search-label">Add guests</label>
          <input type="text" className="search-input" placeholder="Add guests" />
        </div>
        <button className="search-button" aria-label="Search">
          <Search size={16} />
        </button>
      </div>
    </div>
  );
}
