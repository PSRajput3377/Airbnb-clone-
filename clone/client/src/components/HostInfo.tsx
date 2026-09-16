import { Star, Award, ShieldCheck, MessageSquare } from 'lucide-react';
import { Property } from '../types/property';

interface HostInfoProps {
  host: Property['host'];
}

export default function HostInfo({ host }: HostInfoProps) {
  return (
    <div className="host-info-section">
      <div className="host-card-wrapper">
        <div className="host-header-block">
          <div className="host-avatar-large-container">
            <img src={host.avatar} alt={host.name} className="host-avatar-large" />
            {host.isSuperhost && (
              <span className="superhost-badge-pinned" title="Superhost">
                <Award size={14} color="#fff" />
              </span>
            )}
          </div>
          <div className="host-title-details">
            <h2 className="host-name-large">Hosted by {host.name}</h2>
            <p className="host-joined-text">Joined in {host.joinedDate}</p>
          </div>
        </div>

        <div className="host-metrics-grid">
          <div className="metric-box">
            <span className="metric-value">
              <Star size={16} fill="currentColor" /> 4.95
            </span>
            <span className="metric-label">127 Reviews</span>
          </div>
          <div className="metric-box">
            <span className="metric-value">
              <Award size={16} /> Superhost
            </span>
            <span className="metric-label">Identity verified</span>
          </div>
          <div className="metric-box">
            <span className="metric-value">5</span>
            <span className="metric-label">Years hosting</span>
          </div>
        </div>

        <div className="host-details-list">
          <div className="host-detail-item">
            <Award size={20} className="detail-icon" />
            <div>
              <p className="detail-title">{host.name} is a Superhost</p>
              <p className="detail-subtitle">
                Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.
              </p>
            </div>
          </div>
          <div className="host-detail-item">
            <MessageSquare size={20} className="detail-icon" />
            <div>
              <p className="detail-title">Host details</p>
              <p className="detail-subtitle">Response rate: 100% · Response time: within an hour</p>
            </div>
          </div>
        </div>

        <button className="outline-button contact-host-btn">
          Contact Host
        </button>

        <div className="host-security-note">
          <ShieldCheck size={24} className="security-icon" />
          <p className="security-text">
            To protect your payment, never transfer money or communicate outside of the Airbnb website or app.
          </p>
        </div>
      </div>
    </div>
  );
}
