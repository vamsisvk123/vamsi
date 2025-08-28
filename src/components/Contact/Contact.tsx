import React, { useState, FormEvent } from 'react';
import { Mail, Github, Linkedin, Heart } from 'lucide-react';
import emailjs from 'emailjs-com';
import { contactInfo } from '../../data/contact';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Send email using EmailJS
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        to_email: 'vswarna47@gmail.com',
      };

      const response = await emailjs.send(
        'service_tvqhmxj',
        'template_lyeebna',
        templateParams,
        'ctwlxYx0UsLcO4IWD'
      );

      console.log('Email sent successfully!', response.status, response.text);

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-number">05</span>
            Let's Work Together
          </h2>
          <p className="section-subtitle">Ready to bring your ideas to life</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in touch</h3>
            <p>
              I'm always excited to work on new projects and collaborate with
              amazing people. Let's create something incredible together!
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <Mail size={20} />
                <span>{contactInfo.email}</span>
              </div>
              <div className="contact-item">
                <Github size={20} />
                <span>{contactInfo.github}</span>
              </div>
              <div className="contact-item">
                <Linkedin size={20} />
                <span>{contactInfo.linkedin}</span>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
              {submitStatus === 'success' && (
                <p
                  style={{
                    color: 'var(--success-color)',
                    marginTop: '1rem',
                    textAlign: 'center',
                  }}
                >
                  Thank you for your message! I'll get back to you soon.
                </p>
              )}
              {submitStatus === 'error' && (
                <p
                  style={{
                    color: 'var(--error-color)',
                    marginTop: '1rem',
                    textAlign: 'center',
                  }}
                >
                  Something went wrong. Please email me directly at
                  vswarna47@gmail.com
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
