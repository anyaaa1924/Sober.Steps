import React from 'react';
import './resources.css';

const ResourcesPage = () => (
  <main className="resources main-content">
    <div className="resource-types">
      <div className="resource-type articles">
        <h3>Articles</h3>
        <button className="resource-button" onClick={() => window.open("https://www.aa.org", "_blank")}>Take Me There</button>
      </div>
      <div className="resource-type videos">
        <h3>Videos</h3>
        <button className="resource-button" onClick={() => window.open("https://www.aa.org", "_blank")}>Take Me There</button>
      </div>
      <div className="resource-type notes">
        <h3>Notes</h3>
        <button className="resource-button" onClick={() => window.open("https://www.aa.org", "_blank")}>Take Me There</button>
      </div>
      <div className="resource-type worksheets">
        <h3>Worksheets</h3>
        <button className="resource-button" onClick={() => window.open("https://www.aa.org", "_blank")}>Take Me There</button>
      </div>
      <div className="resource-type photos">
        <h3>Photos</h3>
        <button className="resource-button" onClick={() => window.open("https://www.aa.org", "_blank")}>Take Me There</button>
      </div>
      <div className="resource-type voice-recordings">
        <h3>Voice Recordings</h3>
        <button className="resource-button" onClick={() => window.open("https://www.aa.org", "_blank")}>Take Me There</button>
      </div>
    </div>
  </main>
);

export default ResourcesPage;
