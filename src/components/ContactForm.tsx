import React, { useState } from 'react';
import './ContactForm.css';

interface FormData {
  name: string;
  email: string;
  project: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`CircAssimilate Inquiry - ${formData.project}`);
    const body = encodeURIComponent(`Name: ${formData.name}
Email: ${formData.email}
Project Type: ${formData.project}

Message:
${formData.message}

---
Sent from CircAssimilate contact form`);
    
    window.location.href = `mailto:hello@circassimilate.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contact-form">
      <div className="contact-header">
        <h2>INITIATE CONTACT</h2>
        <p>Ready to transform your idea into reality?</p>
      </div>
      
      <form onSubmit={handleSubmit} className="pixel-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="pixel-input"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="pixel-input"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="project">Project Type:</label>
          <select
            id="project"
            name="project"
            value={formData.project}
            onChange={handleChange}
            required
            className="pixel-select"
          >
            <option value="">Select Project Type</option>
            <option value="iOS App">iOS App</option>
            <option value="macOS App">macOS App</option>
            <option value="Web Application">Web Application</option>
            <option value="AI Integration">AI Integration</option>
            <option value="Slack App">Slack App</option>
            <option value="Prototype">Prototype</option>
            <option value="Consultation">Technical Consultation</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="pixel-textarea"
            placeholder="Tell me about your project, timeline, and goals..."
          />
        </div>
        
        <button type="submit" className="pixel-button submit-button">
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default ContactForm;