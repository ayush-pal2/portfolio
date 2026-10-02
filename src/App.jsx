import { useTheme } from './useTheme'
import { profile, experience, projects, skills, education } from './data'
import './App.css'

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

const nav = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top">
          {profile.name}
        </a>
        <nav className="nav">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle color theme"
        >
          {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </button>
      </header>

      <main>
        <section id="top" className="hero">
          <p className="eyebrow">{profile.title}</p>
          <h1>Hi, I&apos;m {profile.name}.</h1>
          <p className="hero-tagline">{profile.tagline}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={profile.resumeUrl} target="_blank" rel="noreferrer">
              Download Resume
            </a>
            <a className="btn btn-secondary" href="#projects">
              View Projects
            </a>
          </div>
        </section>

        <section id="experience" className="section">
          <h2>Experience</h2>
          <div className="experience-list">
            {experience.map((job) => (
              <div className="card" key={job.role + job.company}>
                <div className="card-header">
                  <div>
                    <h3>{job.role}</h3>
                    <a className="company-link" href={job.companyUrl} target="_blank" rel="noreferrer">
                      {job.company}
                    </a>
                    <span className="location"> · {job.location}</span>
                  </div>
                  <span className="period">{job.period}</span>
                </div>
                <ul className="bullet-list">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <div className="card" key={project.name}>
                <div className="card-header">
                  <h3>{project.name}</h3>
                  <span className="period">{project.period}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <ul className="bullet-list">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="tag-row">
                  {project.stack.map((tech) => (
                    <span className="tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      GitHub →
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <h2>Skills</h2>
          <div className="skills-grid">
            {skills.map((group) => (
              <div className="skill-group" key={group.category}>
                <h3>{group.category}</h3>
                <div className="tag-row">
                  {group.items.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="section">
          <h2>Education</h2>
          <div className="card">
            <div className="card-header">
              <div>
                <h3>{education.degree}</h3>
                <span className="location">{education.school}</span>
              </div>
              <span className="period">{education.period}</span>
            </div>
            <p className="project-description">CGPA: {education.cgpa}</p>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <h2>Get in touch</h2>
          <p className="hero-tagline">
            Open to backend engineering roles and collaborations.
          </p>
          <div className="contact-links">
            <a className="btn btn-secondary" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="btn btn-secondary" href={profile.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn btn-secondary" href={profile.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="btn btn-secondary" href={profile.links.leetcode} target="_blank" rel="noreferrer">
              LeetCode
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React.
        </p>
      </footer>
    </>
  )
}

export default App
