function SideContent() {
  return (
    < div className="sidebar" style={{
      textAlign: "center", fontSize: "23px",
      fontWeight: "bold", alignItems: "center"
    }}>
      <div style={{ paddingTop: "20px" }}>
        <img src={process.env.PUBLIC_URL + "/Assets/Myphoto.jpg"}></img>
      </div>
      <p style={{ color: "#44566C", marginBlockStart: "auto" }}>SivaRamaKrishna Movva</p>
      <div style={{
        position: "relative", borderRadius: "20px", backgroundColor: "#E9EDF0",
        color: "grey", display: "inline-block", paddingLeft: "20px",
        paddingRight: "20px", marginBlockStart: "auto"
      }}>Architect</div>
      <p style={{ position: "relative", color: "grey" }}>+91 9845785754</p>

    </div >
  );
}

export default SideContent;