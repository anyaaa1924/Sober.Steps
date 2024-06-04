import React from 'react';
import { BiCalendarEvent, BiMessageRoundedDetail, BiMapPin,BiMaleFemale } from 'react-icons/bi';
import './facilities.css';

const FacilitiesPage = () => (
  <div className="facilities-header">
    <main className="facilities main-content">
      <div className="facility-sections">
        <div className="facility-section">
          <div className="icon-container">
            <BiCalendarEvent size={40} /> {/* Sobriety Calendar icon */}
          </div>
          <h3>Sobriety Calendar</h3>
          <p>Track your progress with our sobriety calendar.</p>
          <a href="https://workspace.google.com/intl/en-GB/products/calendar/" target="_blank" rel="noopener noreferrer" className="facility-button">
  Explore
</a>

        </div>
        <div className="facility-section">
          <div className="icon-container">
            <BiMessageRoundedDetail size={40} /> {/* Consultation icon */}
          </div>
          <h3>Consultation</h3>
          <p>Get professional consultation for your journey.</p>
          <button className="facility-button">Consult Now</button>
        </div>
        <div className="facility-section">
          <div className="icon-container">
            <BiMapPin size={40} /> {/* Locate Rehab Centers icon */}
          </div>
          <h3>Locate Nearby Rehab Centers</h3>
          <p>Find nearby rehab centers for support.</p>
          <a href="https://www.google.com/maps/" target="_blank" rel="noopener noreferrer" className="facility-button">
  Locate Now
</a>
        </div>
        <div className="facility-section">
          <div className="icon-container">
            <BiMaleFemale size={40} /> {/* Consultation icon */}
          </div>
          <h3>Want to find work? Get hired!</h3>

          <p>Employment oppurtunities for you.</p>
          <button className="facility-button">Click here</button>
        </div>


      </div>
    </main>
  </div>
);

export default FacilitiesPage;
