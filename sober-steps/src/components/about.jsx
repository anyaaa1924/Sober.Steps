import React, { useState } from 'react';
import './about.css';
import member1Photo from './ananya.jpeg';
import member2Photo from './anv.jpeg';
import member3Photo from './abh.jpeg';

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="faq-item" onClick={onClick}>
    <div className="faq-title">
      {question}
      <span className="arrow">{isOpen ? '▲' : '▼'}</span>
    </div>
    {isOpen && <div className="faq-content">{answer}</div>}
  </div>
);

const AboutPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is Sober Steps?',
      answer: 'Sober Steps is a platform dedicated to helping individuals achieve and maintain sobriety.'
    },
    {
      question: 'How can I join the community?',
      answer: 'You can join our community by signing up on our website and participating in our forums and events.'
    },
    {
      question: 'Is there a cost to join?',
      answer: 'No, joining Sober Steps is completely free. We are here to support you without any cost.'
    },
    {
      question: 'How can I contact support?',
      answer: 'You can contact our support team through the contact form on our website or by emailing support@sobersteps.com.'
    },
    {
      question: 'Can I contribute to Sober Steps?',
      answer: 'Yes, we welcome contributions from anyone who wants to support our mission. You can contribute by writing articles, sharing resources, or donating.'
    }
  ];

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="about">
      <h2>About Us</h2>
      <div className="horizontal-containers">
        <div className="container mission">
          <h3>Our Mission</h3>
          <p>At Sober Steps, our vision is to create a world where individuals struggling with addiction find unwavering support, hope, and a clear path to lasting sobriety. We envision a compassionate and empowering community where everyone has access to the resources, education, and peer connections they need to overcome addiction and thrive in their recovery journey. Through innovative solutions and a holistic approach that addresses the mind, body, and spirit, we aim to foster a sustainable, inclusive, and inspiring environment for long-term sobriety and personal growth.</p>
        </div>
        <div className="container vision">
          <h3>Our Vision</h3>
          <p>Our mission at Sober Steps is to support and guide individuals on their journey to sobriety by providing comprehensive resources, professional guidance, and a strong sense of community. We are dedicated to empowering our members through education, skill development, and access to expert advice, helping them to navigate the challenges of addiction and build a fulfilling, sober life. By fostering a network of peer support and emphasizing holistic well-being, we strive to make sobriety accessible and achievable for everyone, regardless of their background or circumstances.</p>
        </div>
        <div className="container motto">
          <h3>Our Motto</h3>
          <p> Empower, Inspire, Achieve. These three words encapsulate the essence of Sober Steps. We empower individuals to take control of their recovery journey, inspire them with stories of success and resilience, and help them achieve their goals for a healthy, sober life. Our motto reflects our commitment to being a source of strength, motivation, and practical support for anyone seeking sobriety.</p>
        </div>
      </div>

      <div className="team-section">
        <h3>Meet the Team</h3>
        <div className="team-members">
          <div className="team-member">
          <img src={member1Photo} alt="Team Member 1" />
            <h3>Ananya Bhat</h3>
            <p>Developer</p>
          </div>
          <div className="team-member">
            <img src={member2Photo} alt="Team Member 2" />
            <h3>Ananya Vinod</h3>
            <p>Developer</p>
          </div>
          <div className="team-member">
          <img src={member3Photo} alt="Team Member 3" />
                      <h3>Abhishek Sharma</h3>
            <p>Developer</p>
          </div>
        </div>
      </div>

      <div className="faq-section">
        <h3>Frequently Asked Questions</h3>
        <div className="faq">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
