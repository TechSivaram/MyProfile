import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudDownloadAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons'

function SideContent() {
  return (
    < div className="sidebar" style={{
      textAlign: "center", fontSize: "23px",
      fontWeight: "bold", alignItems: "center"
    }}>
      <div style={{ paddingTop: "20px" }}>
        <img src={process.env.PUBLIC_URL + "/Assets/Myphoto.jpg"} alt=""></img>
      </div>
      <p style={{ color: "#44566C", marginBlockStart: "auto" }}>SivaRamaKrishna Movva</p>
      <div style={{
        position: "relative", borderRadius: "20px", backgroundColor: "#E9EDF0",
        color: "grey", display: "inline-block", paddingLeft: "20px",
        paddingRight: "20px", marginBlockStart: "auto"
      }}>Technical Architect</div>
      <p style={{ position: "relative", color: "grey" }}>+91 9845785754</p>

      <div style={{ position: "relative", display: "inline-block" }}>
        <a style={{ color: "blue" }} href="/Resume.htm">Resume</a>&nbsp;&nbsp;
        <a href={process.env.PUBLIC_URL + "/Assets/Resume.doc"}>
          <FontAwesomeIcon icon={faCloudDownloadAlt} size="xs" />
        </a>
      </div>
      <p style={{ position: "relative", color: "grey" }}></p>
      <div style={{ position: "relative", display: "inline-block" }}>
        <a href="https://github.com/TechSivaram" alt="github">
          <FontAwesomeIcon icon={faGithub} size="xs" />
        </a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://www.linkedin.com/in/sivaram-movva" alt="linkedin">
          <FontAwesomeIcon icon={faLinkedin} size="xs" />
        </a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="skype:live:sivaram.movva_2" alt="live:sivaram.movva_2">
          <FontAwesomeIcon icon={faSkype} size="xs" />
        </a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="mailto:sivaram.movva@gmail.com" alt="sivaram.movva@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} size="xs" />
        </a>
      </div>
      <p style={{ position: "relative", color: "grey" }}></p>
    </div >
  );
}

export default SideContent;