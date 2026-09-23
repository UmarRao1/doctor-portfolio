import MedicalHeartTest from "../components/MedicalHeartTest";
import Medical3D from "../components/Medical3D";

function Home() {
  return (
    <main>
      <div className="medical-background" aria-hidden="true">
        <div className="medical-orb medical-orb-one"></div>
        <div className="medical-orb medical-orb-two"></div>
        <div className="medical-grid"></div>

        <div className="medical-pulse">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <p className="hero-eyebrow">
              INTERVENTIONAL CARDIOLOGY
            </p>

            <h1>
              Dr. Shaukat
              <br />
              Ali
            </h1>

            <h2>MD, FACC</h2>

            <p className="hero-title">
              Interventional Cardiologist
              <br />
              &amp; Peripheral Interventionalist
            </p>

            <p className="hero-description">
              Dedicated to advanced cardiovascular care, complex
              interventions, structural heart procedures, and
              comprehensive patient-centered treatment.
            </p>

            <div className="hero-buttons">
              <a href="/about" className="btn btn-primary">
                Explore Profile
              </a>

              <a href="/contact" className="btn btn-outline">
                Contact
              </a>
            </div>

            <div className="hero-credentials">
              <div>
                <strong>FACC</strong>
                <span>American College of Cardiology</span>
              </div>

              <div>
                <strong>15+ Years</strong>
                <span>Professional experience</span>
              </div>

              <div>
                <strong>UCSF Fresno</strong>
                <span>Assistant Professor of Medicine</span>
              </div>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <Medical3D />

            <div className="hero-image-glow"></div>

            <div className="hero-image-card">
              <img
                src="/images/doctor-shaukat-ali.jpg"
                alt="Dr. Shaukat Ali"
                className="hero-doctor-image"
              />

              <div className="hero-floating-card hero-card-top">
                <strong>15+</strong>
                <span>Years Experience</span>
              </div>

              <div className="hero-floating-card hero-card-bottom">
                <strong>FACC</strong>
                <span>Board Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL INTRO */}
      <section className="intro-section">
        <div className="container intro-container">
          <div>
            <p className="section-label">
              Professional Profile
            </p>

            <h2 className="section-title">
              Advanced care.
              <br />
              Experienced leadership.
            </h2>
          </div>

          <p className="section-description">
            Dr. Shaukat Ali is an Interventional Cardiologist and
            Peripheral Interventionalist serving patients in Fresno,
            California. His clinical interests include complex coronary
            interventions, transcatheter aortic valve replacement,
            endovascular interventions, and limb salvage procedures.
          </p>
        </div>
      </section>

      {/* FEATURED AREAS */}
      <section className="home-expertise">
        <div className="container">
          <div className="home-section-heading">
            <div>
              <p className="section-label">
                Clinical Focus
              </p>

              <h2 className="section-title">
                Areas of expertise
              </h2>
            </div>

            <p>
              Advanced cardiovascular and endovascular care across
              complex coronary, structural heart, and peripheral
              interventions.
            </p>
          </div>

          <div className="home-expertise-grid">
            <article className="home-expertise-card">
              <span>01</span>

              <h3>
                Complex Coronary
                Interventions
              </h3>

              <p>
                Advanced interventional approaches for complex
                coronary disease.
              </p>

              <a href="/about">
                Learn more →
              </a>
            </article>

            <article className="home-expertise-card">
              <span>02</span>

              <h3>
                Structural Heart
              </h3>

              <p>
                Structural heart procedures including transcatheter
                aortic valve replacement.
              </p>

              <a href="/about">
                Learn more →
              </a>
            </article>

            <article className="home-expertise-card">
              <span>03</span>

              <h3>
                Endovascular
                Intervention
              </h3>

              <p>
                Advanced endovascular procedures including
                pedal-access intervention.
              </p>

              <a href="/about">
                Learn more →
              </a>
            </article>

            <article className="home-expertise-card">
              <span>04</span>

              <h3>
                Limb Salvage
              </h3>

              <p>
                Interventional approaches focused on vascular
                care and limb preservation.
              </p>

              <a href="/about">
                Learn more →
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* PATIENT REVIEWS */}
      <section className="home-reviews">
        <div className="container">
          <div className="home-section-heading reviews-heading">
            <div>
              <p className="section-label">
                Patient Experiences
              </p>

              <h2 className="section-title">
                Trusted care.
                <br />
                Meaningful experiences.
              </h2>
            </div>

            <p>
              Patient-centered cardiovascular care built around
              communication, trust, and thoughtful treatment.
            </p>
          </div>

          <div className="reviews-grid">
            <article className="review-card">
              <div className="review-top">
                <div className="review-avatar">
                  JM
                </div>

                <div>
                  <h3>James M.</h3>
                  <span>Patient</span>
                </div>

                <div className="review-stars">
                  ★★★★★
                </div>
              </div>

              <p className="review-text">
                "Dr. Ali took the time to explain my treatment clearly
                and made me feel comfortable throughout the process."
              </p>

              <span className="review-line"></span>
            </article>

            <article className="review-card featured-review">
              <div className="review-top">
                <div className="review-avatar">
                  SR
                </div>

                <div>
                  <h3>Sarah R.</h3>
                  <span>Patient</span>
                </div>

                <div className="review-stars">
                  ★★★★★
                </div>
              </div>

              <p className="review-text">
                "The entire experience was professional and reassuring.
                I appreciated the attention to detail and clear communication."
              </p>

              <span className="review-line"></span>
            </article>

            <article className="review-card">
              <div className="review-top">
                <div className="review-avatar">
                  DL
                </div>

                <div>
                  <h3>David L.</h3>
                  <span>Patient</span>
                </div>

                <div className="review-stars">
                  ★★★★★
                </div>
              </div>

              <p className="review-text">
                "I felt listened to from the first consultation.
                The care and professionalism were exceptional."
              </p>

              <span className="review-line"></span>
            </article>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="home-leadership">
        <div className="container home-leadership-grid">
          <div>
            <p className="section-label">
              Clinical Leadership
            </p>

            <h2 className="section-title">
              Medicine,
              <br />
              leadership &amp;
              <br />
              education.
            </h2>
          </div>

          <div className="home-leadership-content">
            <div className="home-role">
              <span>01</span>

              <div>
                <h3>
                  Chair of Cardiology
                </h3>

                <p>
                  Saint Agnes Medical Center
                </p>
              </div>
            </div>

            <div className="home-role">
              <span>02</span>

              <div>
                <h3>
                  Director, Structural Heart Disease
                </h3>

                <p>
                  Saint Agnes Medical Center
                </p>
              </div>
            </div>

            <div className="home-role">
              <span>03</span>

              <div>
                <h3>
                  Assistant Professor of Medicine
                </h3>

                <p>
                  UCSF Fresno
                </p>
              </div>
            </div>

            <div className="home-role">
              <span>04</span>

              <div>
                <h3>
                  Cardiology Teaching Faculty
                </h3>

                <p>
                  Saint Agnes Medical Center
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="home-cta">
        <div className="container home-cta-content">
          <div>
            <p className="section-label">
              Professional Profile
            </p>

            <h2>
              Explore Dr. Ali's
              <br />
              professional journey.
            </h2>
          </div>

          <a
            href="/experience"
            className="btn btn-primary"
          >
            View Experience →
          </a>
        </div>
      </section>

      {/* ISOLATED 3D HEART TEST */}
      <MedicalHeartTest />
    </main>
  );
}

export default Home;
