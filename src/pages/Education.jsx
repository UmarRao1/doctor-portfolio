function Education() {
    return (
      <main>
        {/* Page Header */}
        <section className="page-hero">
          <div className="container">
            <p className="section-label">Education & Training</p>
  
            <h1 className="page-title">
              A foundation built through
              <br />
              advanced medical training.
            </h1>
  
            <p className="page-intro">
              Medical education and specialized cardiovascular training
              spanning Pakistan and the United States.
            </p>
          </div>
        </section>
  
        {/* Education Timeline */}
        <section className="education-section">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Medical Education</p>
  
              <h2 className="section-title">
                Education &amp; Fellowship Training
              </h2>
  
              <p className="section-description">
                A progression from foundational medical education to
                advanced cardiovascular and interventional cardiology
                training.
              </p>
            </div>
  
            <div className="education-timeline">
              {/* MBBS */}
              <article className="education-item">
                <div className="education-marker">
                  <span>01</span>
                </div>
  
                <div className="education-content">
                  <p className="education-type">
                    Medical Degree
                  </p>
  
                  <h3>MBBS</h3>
  
                  <h4>
                    Nishtar Medical College
                  </h4>
  
                  <p>
                    Multan, Pakistan
                  </p>
  
                  <div className="education-description">
                    <p>
                      Foundational medical education providing comprehensive
                      training in medicine and clinical sciences.
                    </p>
                  </div>
                </div>
              </article>
  
              {/* Residency */}
              <article className="education-item">
                <div className="education-marker">
                  <span>02</span>
                </div>
  
                <div className="education-content">
                  <p className="education-type">
                    Residency
                  </p>
  
                  <h3>Internal Medicine</h3>
  
                  <h4>
                    SUNY Downstate Medical Center
                  </h4>
  
                  <p>
                    Long Island College Hospital, Brooklyn, New York
                  </p>
  
                  <div className="education-description">
                    <p>
                      Residency training in Internal Medicine at
                      SUNY Downstate Medical Center and Long Island
                      College Hospital.
                    </p>
                  </div>
                </div>
              </article>
  
              {/* Cardiovascular Fellowship */}
              <article className="education-item">
                <div className="education-marker">
                  <span>03</span>
                </div>
  
                <div className="education-content">
                  <p className="education-type">
                    Fellowship
                  </p>
  
                  <h3>Cardiovascular Disease</h3>
  
                  <h4>
                    Albert Einstein College of Medicine
                  </h4>
  
                  <p>
                    Beth Israel Medical Center, New York
                  </p>
  
                  <div className="education-description">
                    <p>
                      Advanced fellowship training in cardiovascular
                      disease at Beth Israel Medical Center.
                    </p>
                  </div>
                </div>
              </article>
  
              {/* Interventional Fellowship */}
              <article className="education-item">
                <div className="education-marker">
                  <span>04</span>
                </div>
  
                <div className="education-content">
                  <p className="education-type">
                    Advanced Fellowship
                  </p>
  
                  <h3>Interventional Cardiology</h3>
  
                  <h4>
                    Albert Einstein College of Medicine
                  </h4>
  
                  <p>
                    Beth Israel Medical Center, New York
                  </p>
  
                  <div className="education-description">
                    <p>
                      Specialized fellowship training in interventional
                      cardiology, advancing expertise in catheter-based
                      cardiovascular procedures.
                    </p>
                  </div>
                </div>
              </article>
  
              {/* UCSF */}
              <article className="education-item">
                <div className="education-marker">
                  <span>05</span>
                </div>
  
                <div className="education-content">
                  <p className="education-type">
                    Academic &amp; Clinical Practice
                  </p>
  
                  <h3>Interventional Cardiology</h3>
  
                  <h4>
                    UCSF Fresno
                  </h4>
  
                  <p>
                    Fresno, California
                  </p>
  
                  <div className="education-description">
                    <p>
                      Serves as Assistant Professor of Medicine,
                      Interventional Cardiologist, and Peripheral
                      Interventionalist.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
  
        {/* Credentials */}
        <section className="credentials-section">
          <div className="container credentials-container">
            <div>
              <p className="section-label">
                Professional Credentials
              </p>
  
              <h2 className="section-title">
                Medical credentials
              </h2>
            </div>
  
            <div className="credentials-list">
              <div className="credential">
                <strong>MD</strong>
                <span>Doctor of Medicine</span>
              </div>
  
              <div className="credential">
                <strong>FACC</strong>
                <span>
                  Fellow of the American College of Cardiology
                </span>
              </div>
  
              <div className="credential">
                <strong>Board Certified</strong>
                <span>
                  Interventional Cardiology
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
  
  export default Education