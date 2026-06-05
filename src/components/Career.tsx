import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education & <span>&</span>
          <br /> Achievements
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Computer Engineering</h4>
                <h5>Pimpri Chinchwad College of Engineering (PCCOE)</h5>
              </div>
              <h3>CGPA: 7.58</h3>
            </div>
            <p>
              Pursuing a degree in Computer Engineering with focus on full-stack development, algorithms, and software design. Active in hackathons, coding competitions, and tech communities.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Google Arcade Games 2026 Cohort-1</h4>
                <h5>Participant</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Selected as a participant in Google's Arcade Games program, demonstrating exceptional coding skills and problem-solving abilities in competitive programming.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>API Conf Pune 2025</h4>
                <h5>Attended</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Attended API Conf Pune to stay updated with latest trends in API design, development practices, and modern backend technologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Google WOW Event</h4>
                <h5>Attended</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Participated in Google's World of Web event, exploring cutting-edge web technologies, performance optimization, and industry best practices for modern web development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
