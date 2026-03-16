import React from 'react';
import './App.css';

import ruggleImg from './assets/tuggle.png';
import profileImg from './assets/profile.jpg';

const projects = [
  {
    title: "Student Portal",
    url: "https://kreyaproject.netlify.app/",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
    desc: "A comprehensive portal for managing student records and academic data."
  },
  {
    title: "ShopZen",
    url: "https://kreyaproject2.netlify.app/",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    desc: "A modern eCommerce platform for seamless online shopping and product management."
  },
  {
    title: "Ruggle Clone",
    url: "https://kreya-website6.netlify.app/",
    image: ruggleImg,
    desc: "A sleek and responsive clone of the Ruggle platform featuring modern UI elements."
  },
  {
    title: "Anker Clone",
    url: "https://kreya-anker-clone.netlify.app/",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    desc: "A sleek and responsive clone of the Anker website featuring modern UI elements."
  },
  {
    title: "Meal Explorer",
    url: "https://kreyaprojectmealexplorer.netlify.app/",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    desc: "A comprehensive food discovery app using TheMealDB API to explore and like recipes."
  },
  {
    title: "Myntra Clone",
    url: "https://kreyaprojectclone.netlify.app/",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
    desc: "A sleek fashion e-commerce platform with categorized shopping and modern UI."
  }
];

function App() {
  return (
    <div className="portfolio">
      <nav>
        <div className="container nav-content">
          <div className="logo">Kreya<span className="gradient-text">Panchal</span></div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <main className="container">
        {/* Hero Section */}
        <section id="home" className="hero animate">
          <div className="hero-content">
            <p className="hero-subtitle">Hello, I'm</p>
            <h1 className="hero-title">Kreya <span className="gradient-text">Panchal</span></h1>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#fff' }}>
              Aspiring Full Stack Developer
            </h2>
            <p className="hero-description">
              Currently a dedicated student pursuing my BE degree. I'm passionate about building
              seamless digital experiences and mastering both frontend and backend technologies.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-outline">Let's Talk</a>
            </div>
          </div>
          <div className="hero-image">
            <img src={profileImg} alt="Kreya Panchal" />
          </div>
        </section>

        {/* Education Section */}
        <section id="education">
          <h2 className="section-title"><span className="gradient-text">Education</span></h2>
          <div className="card-grid">
            <div className="card edu-item">
              <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>BE in Computer Engineering</h3>
              <p style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Swaminarayan University, Kalol</p>
              <p className="text-muted">2025 — Present</p>
              <div style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>
                <p>• Focusing on Full Stack Web Development & Data Structures</p>
                <p>• Mastering modern frameworks like React and Node.js</p>
                <p>• Participant in various university tech fests and coding events</p>
              </div>
            </div>

            <div className="card edu-item">
              <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Higher Secondary (12th)</h3>
              <p style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Science Stream (PCM)</p>
              <p className="text-muted">Completed in 2025</p>
              <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>
                Developed a strong foundation in Mathematics and Physics, sparking my interest in computational logic.
              </p>
            </div>

            <div className="card edu-item">
              <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Secondary School (10th)</h3>
              <p style={{ fontWeight: 600, marginBottom: '0.25rem' }}>GSEB Board</p>
              <p className="text-muted">Completed in 2023</p>
              <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>
                Consistently performed well in science and technology subjects with active participation in school events.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <h2 className="section-title"><span className="gradient-text">Skills</span></h2>
          <div className="card-grid">
            <div className="card">
              <h3 style={{ marginBottom: '1.5rem' }}>Frontend</h3>
              <div className="skills-list">
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS3</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">Tailwind CSS</span>
              </div>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '1.5rem' }}>Backend</h3>
              <div className="skills-list">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">REST APIs</span>
              </div>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '1.5rem' }}>Tools</h3>
              <div className="skills-list">
                <span className="skill-tag">Git & GitHub</span>
                <span className="skill-tag">VS Code</span>
                <span className="skill-tag">Figma</span>
                <span className="skill-tag">Netlify</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2 className="section-title"><span className="gradient-text">Projects</span></h2>
          <div className="card-grid">
            {projects.map((project, index) => (
              <div key={index} className="card project-card">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                    {project.desc}
                  </p>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
                    Live Demo
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>Get In <span className="gradient-text">Touch</span></h2>
            <p className="text-muted">Feel free to reach out for collaborations or just a friendly hello!</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
            <div>
              <div className="card" style={{ marginBottom: '2rem' }}>
                <h3 style={{ marginBottom: '1rem' }}>Social Links</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <a href="https://github.com/kreya228" target="_blank" rel="noopener noreferrer" className="project-link" style={{ fontSize: '1.1rem' }}>
                    Follow on GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/kreya-panchal-08a045372" target="_blank" rel="noopener noreferrer" className="project-link" style={{ fontSize: '1.1rem' }}>
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
              <p className="text-muted">Based in Kalol, India. Open to opportunities and internships.</p>
            </div>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" className="form-input" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" className="form-input" placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea className="form-input" placeholder="How can I help you?"></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer style={{ padding: '4rem 0', textAlign: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.05)', marginTop: '4rem' }}>
        <p className="text-muted">© {new Date().getFullYear()} Kreya Panchal. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
