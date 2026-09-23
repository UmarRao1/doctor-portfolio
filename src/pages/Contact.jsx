function Contact() {
    return (
      <main>
        {/* Page Header */}
        <section className="page-hero">
          <div className="container">
            <p className="section-label">Contact</p>
  
            <h1 className="page-title">
              Connect with the
              <br />
              practice.
            </h1>
  
            <p className="page-intro">
              For professional inquiries and information about
              cardiovascular care, please use the contact details below.
            </p>
          </div>
        </section>
  
        {/* Contact Section */}
        <section className="contact-section">
          <div className="container contact-grid">
  
            {/* Contact Information */}
            <div className="contact-info">
              <p className="section-label">
                Professional Contact
              </p>
  
              <h2 className="section-title">
                Get in touch.
              </h2>
  
              <p className="contact-description">
                Dr. Shaukat Ali serves patients through The Heart Group
                Cardiovascular Associates, Inc. in California.
              </p>
  
              <div className="contact-details">
  
                <div className="contact-detail">
                  <span className="contact-detail-label">
                    Practice
                  </span>
  
                  <strong>
                    The Heart Group Cardiovascular Associates, Inc.
                  </strong>
                </div>
  
                <div className="contact-detail">
                  <span className="contact-detail-label">
                    Location
                  </span>
  
                  <strong>
                    Fresno, California
                  </strong>
                </div>
  
                <div className="contact-detail">
                  <span className="contact-detail-label">
                    Professional Role
                  </span>
  
                  <strong>
                    Interventional Cardiologist &amp;
                    Peripheral Interventionalist
                  </strong>
                </div>
  
              </div>
            </div>
  
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <div className="contact-form-header">
                <p className="section-label">
                  Send an Inquiry
                </p>
  
                <h2>
                  Professional inquiry
                </h2>
  
                <p>
                  Complete the form below and provide your contact
                  information and message.
                </p>
              </div>
  
              <form className="contact-form">
  
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      Full Name
                    </label>
  
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                    />
                  </div>
  
                  <div className="form-group">
                    <label htmlFor="email">
                      Email Address
                    </label>
  
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
  
                <div className="form-group">
                  <label htmlFor="subject">
                    Subject
                  </label>
  
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject of your inquiry"
                  />
                </div>
  
                <div className="form-group">
                  <label htmlFor="message">
                    Message
                  </label>
  
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Write your message..."
                  ></textarea>
                </div>
  
                <button
                  type="submit"
                  className="btn btn-primary contact-submit"
                >
                  Send Inquiry
                </button>
  
              </form>
            </div>
  
          </div>
        </section>
  
        {/* Professional Note */}
        <section className="contact-note">
          <div className="container">
            <div className="contact-note-inner">
              <div>
                <p className="section-label">
                  Professional Information
                </p>
  
                <h2>
                  For medical care and appointments
                </h2>
              </div>
  
              <p>
                Please contact the appropriate practice or medical
                facility directly for appointments, consultations,
                scheduling, and patient-care questions.
              </p>
            </div>
          </div>
        </section>
      </main>
    )
  }
  
  export default Contact