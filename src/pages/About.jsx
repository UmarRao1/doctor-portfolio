function About() {
    return (
      <main>
        {/* Page Hero */}
        <section className="page-hero">
          <div className="container">
            <p className="section-label">About Dr. Shaukat Ali</p>
  
            <h1 className="page-title">
              Dedicated to advanced
              <br />
              cardiovascular care.
            </h1>
  
            <p className="page-intro">
              Interventional Cardiologist and Peripheral Interventionalist
              with extensive experience in complex cardiovascular and
              endovascular interventions.
            </p>
          </div>
        </section>
  
        {/* Professional Profile */}
        <section className="about-section">
          <div className="container about-grid">
            <div className="about-heading">
              <p className="section-label">Professional Profile</p>
  
              <h2 className="section-title">
                Experience, expertise,
                <br />
                and dedication to care.
              </h2>
            </div>
  
            <div className="about-content">
              <p>
                Shaukat Ali, MD, FACC, joined The Heart Group Cardiovascular
                Associates, Inc. in 2015 and continues to serve his patients
                with dedication and expertise. A Fellow of the American College
                of Cardiology, Dr. Ali is board certified in interventional
                cardiology and is an expert in endovascular intervention via
                pedal access.
              </p>
  
              <p>
                He has a passion for performing complex coronary interventions,
                transcatheter aortic valve replacement, endovascular
                interventions, and limb salvage procedures.
              </p>
  
              <p>
                Highly regarded by his peers, Dr. Ali serves as Chair of
                Cardiology at Saint Agnes Medical Center and formerly held this
                leadership position at Clovis Community Medical Center. He also
                serves as Director of Structural Heart Disease at Saint Agnes.
              </p>
  
              <p>
                Dr. Ali contributes to the next generation of cardiologists as
                an esteemed faculty member in the cardiology teaching programs
                for medicine and family medicine residents at Saint Agnes. He
                also serves as an Assistant Professor of Medicine at UCSF
                Fresno and North State University.
              </p>
            </div>
          </div>
        </section>
  
        {/* Current Professional Roles */}
        <section className="about-highlight">
          <div className="container highlight-grid">
            <div>
              <p className="section-label">Professional Leadership</p>
  
              <h2 className="section-title">
                Clinical leadership
                <br />
                &amp; academic medicine.
              </h2>
            </div>
  
            <div className="highlight-card">
              <div className="role-item">
                <h3>Chair of Cardiology</h3>
                <p>Saint Agnes Medical Center</p>
              </div>
  
              <div className="role-item">
                <h3>Director, Structural Heart Disease</h3>
                <p>Saint Agnes Medical Center</p>
              </div>
  
              <div className="role-item">
                <h3>Assistant Professor of Medicine</h3>
                <p>UCSF Fresno &amp; North State University</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Clinical Expertise */}
        <section className="expertise-section">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Clinical Expertise</p>
  
              <h2 className="section-title">
                Areas of expertise
              </h2>
  
              <p className="section-description">
                Dr. Ali's clinical interests include advanced coronary,
                structural heart, peripheral vascular, and limb-salvage
                interventions.
              </p>
            </div>
  
            <div className="expertise-grid">
              <article className="expertise-card">
                <span className="expertise-number">01</span>
  
                <h3>Complex Coronary Interventions</h3>
  
                <p>
                  Advanced interventional approaches for complex coronary
                  disease.
                </p>
              </article>
  
              <article className="expertise-card">
                <span className="expertise-number">02</span>
  
                <h3>Structural Heart</h3>
  
                <p>
                  Structural heart procedures including transcatheter
                  aortic valve replacement.
                </p>
              </article>
  
              <article className="expertise-card">
                <span className="expertise-number">03</span>
  
                <h3>Endovascular Intervention</h3>
  
                <p>
                  Endovascular interventions, including procedures using
                  pedal access.
                </p>
              </article>
  
              <article className="expertise-card">
                <span className="expertise-number">04</span>
  
                <h3>Limb Salvage</h3>
  
                <p>
                  Interventional approaches focused on limb preservation
                  and vascular care.
                </p>
              </article>
            </div>
          </div>
        </section>
  
        {/* Personal */}
        <section className="personal-section">
          <div className="container personal-container">
            <div>
              <p className="section-label">Beyond Medicine</p>
  
              <h2 className="section-title">
                Life beyond
                <br />
                the hospital.
              </h2>
            </div>
  
            <div className="personal-content">
              <p>
                Beyond his professional commitments, Dr. Ali enjoys traveling,
                swimming, walking, bike riding, and engaging in lively
                conversations.
              </p>
  
              <p>
                He is a proud father of one daughter and three sons.
              </p>
            </div>
          </div>
        </section>
      </main>
    )
  }
  
  export default About