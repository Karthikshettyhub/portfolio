import React from 'react';

const AboutProjects = () => {
  return (
    <section
      id="about-projects"
      style={{
        position: 'relative',
        zIndex: 20,
        minHeight: '100vh', // full screen height
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        padding: '4rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ maxWidth: '1200px', width: '100%' }}>
        {/* Introduction */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '4rem',
            opacity: 0,
            animation: 'slideUp 1s ease-out forwards',
            animationDelay: '0.2s',
          }}
        >
          <h2
            style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              color: '#1a1a1a',
              marginBottom: '1.5rem',
              fontFamily: '"Pacifico", cursive',
            }}
          >
            About Me
          </h2>
          <p
            style={{
              fontSize: '1.25rem',
              color: '#4a4a4a',
              lineHeight: '1.8',
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            I'm a passionate developer who loves creating beautiful and functional web experiences.
            With expertise in modern web technologies, I bring ideas to life through code.
          </p>
        </div>

        {/* Projects Section */}
        <div
          style={{
            marginTop: '4rem',
            opacity: 0,
            animation: 'slideUp 1s ease-out forwards',
            animationDelay: '0.4s',
          }}
        >
          <h3
            style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#1a1a1a',
              marginBottom: '2rem',
              textAlign: 'center',
              fontFamily: '"Pacifico", cursive',
            }}
          >
            My Projects
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginTop: '2rem',
            }}
          >
            {/* Project Cards */}
            {['Project One', 'Project Two', 'Project Three'].map((title, i) => (
              <div
                key={title}
                style={{
                  background: 'white',
                  borderRadius: '1rem',
                  padding: '2rem',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  opacity: 0,
                  animation: 'slideUp 1s ease-out forwards',
                  animationDelay: `${0.6 + i * 0.2}s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow =
                    '0 10px 20px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow =
                    '0 4px 6px rgba(0, 0, 0, 0.1)';
                }}
              >
                <h4
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: '#1a1a1a',
                    marginBottom: '1rem',
                  }}
                >
                  {title}
                </h4>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  {title === 'Project One'
                    ? 'A stunning web application built with modern technologies. Features include responsive design, smooth animations, and intuitive user experience.'
                    : title === 'Project Two'
                    ? 'An innovative solution that solves real-world problems. Built with scalability and performance in mind.'
                    : 'A creative project showcasing advanced techniques and best practices in web development.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default AboutProjects;
