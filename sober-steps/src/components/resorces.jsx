import React from 'react';
import { FaNewspaper, FaVideo, FaStickyNote, FaFileAlt, FaImage,  FaTrophy } from 'react-icons/fa'; // Import relevant icons
import './resources.css';

const ResourcesPage = () => (
  <main className="resources main-content">
    <div className="resource-types">
      <div className="resource-type articles">
        <FaNewspaper className="resource-icon" />
        <h3>Articles</h3>
        <button className="resource-button" onClick={() => window.open("https://www.sciencedirect.com/topics/medicine-and-dentistry/sobriety", "_blank")}>Take Me There</button>
      </div>
      <div className="resource-type videos">
        <FaVideo className="resource-icon" />
        <h3>Videos</h3>
        <button className="resource-button" onClick={() => window.open("https://youtu.be/T8cSq_2wZRE?si=XyaGqvcxJR1nHtsM", "_blank")}>Take Me There</button>
      </div>
      <div className="resource-type notes">
        <FaStickyNote className="resource-icon" />
        <h3>Notes</h3>
        <button className="resource-button" onClick={() => window.open("https://www.alcoholrehabguide.org/alcohol/#:~:text=Alcoholism%20is%20the%20most%20severe,can%20cause%20harmful%20side%20effects.", "_blank")}>Take Me There</button>
      </div>
      <div className="resource-type worksheets">
        <FaFileAlt className="resource-icon" />
        <h3>Worksheets</h3>
        <button className="resource-button" onClick={() => window.open("https://academic.oup.com/book/1121/chapter/138194264", "_blank")}>Take Me There</button>
      </div>
      <div className="resource-type photos">
        <FaImage className="resource-icon" />
        <h3>Photos</h3>
        <button className="resource-button" onClick={() => window.open("https://www.istockphoto.com/photos/sobriety", "_blank")}>Take Me There</button>
      </div>
      <div className="resource-type voice-recordings">
        < FaTrophy className="resource-icon"  />
        <h3>Rewards</h3>
        <button className="resource-button" onClick={() => window.location.href='/rewards'}>Take Me There</button>
      </div>
    </div>
  </main>
);

export default ResourcesPage;
