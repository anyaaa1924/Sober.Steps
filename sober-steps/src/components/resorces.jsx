import React from 'react';
import { FaNewspaper, FaVideo, FaStickyNote, FaFileAlt, FaImage, FaMicrophone } from 'react-icons/fa'; // Import relevant icons
import './resources.css';

const ResourcesPage = () => (
  <main className="resources main-content">
    <div className="resource-types">
      <div className="resource-type articles">
        <FaNewspaper className="resource-icon" />
        <h3>Articles</h3>
        <button className="resource-button" onClick={() => window.open("https://www.aa.org", "_blank")}>Take Me There</button>
      </div>
      <div className="resource-type videos">
        <FaVideo className="resource-icon" />
        <h3>Videos</h3>
        <button className="resource-button" onClick={() => window.open("https://www.aa.org", "_blank")}>Take Me There</button>
      </div>
      <div className="resource-type notes">
        <FaStickyNote className="resource-icon" />
        <h3>Notes</h3>
        <button className="resource-button" onClick={() => window.open("https://www.aa.org", "_blank")}>Take Me There</button>
      </div>
      <div className="resource-type worksheets">
        <FaFileAlt className="resource-icon" />
        <h3>Worksheets</h3>
        <button className="resource-button" onClick={() => window.open("https://www.aa.org", "_blank")}>Take Me There</button>
      </div>
      <div className="resource-type photos">
        <FaImage className="resource-icon" />
        <h3>Photos</h3>
        <button className="resource-button" onClick={() => window.open("https://www.aa.org", "_blank")}>Take Me There</button>
      </div>
      <div className="resource-type voice-recordings">
        <FaMicrophone className="resource-icon" />
        <h3>Voice Recordings</h3>
        <button className="resource-button" onClick={() => window.open("https://www.aa.org", "_blank")}>Take Me There</button>
      </div>
    </div>
  </main>
);

export default ResourcesPage;
