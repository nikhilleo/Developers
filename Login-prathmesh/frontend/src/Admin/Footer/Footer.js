import "./Footer.css";

function App() {
  return (
    <div className="Apsp">
      <footer>
        <div class="main-content">
          <div class="left box">
            <h2>About us</h2>
            <div class="contents">
              <p style={{ position: "relative", top: "4vh" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
                facilis impedit commodi totam possimus omnis minima optio illo
                ullam non nihil enim, molestias natus ipsa recusandae assumenda,
                voluptatibus accusamus error!
              </p>
              <div class="social" style={{ position: "relative", top: "8vh" }}>
                <a href="https://facebook.com/">
                  <span
                    style={{ color: "#3b5bf9" }}
                    class="fab fa-facebook-f"
                  ></span>
                </a>
                <a href="#https://twitter.com/">
                  <span
                    style={{ color: "#18d3fd" }}
                    class="fab fa-twitter"
                  ></span>
                </a>
                <a href="https://instagram.com/">
                  <span
                    style={{ color: "#e43655" }}
                    class="fab fa-instagram"
                  ></span>
                </a>
                <a href="https://youtube.com/">
                  <span style={{ color: "red" }} class="fab fa-youtube"></span>
                </a>
              </div>
            </div>
          </div>
          <div class="center box">
            <h2>Address</h2>
            <div class="content">
              <div class="place">
                <span class="fas fa-map-marker-alt"></span>
                <span class="text">Maharashtra , India</span>
              </div>
              <div class="phone">
                <span class="fas fa-phone-alt"></span>
                <span class="text">+91 8454838483</span>
              </div>
              <div class="email">
                <span class="fas fa-envelope"></span>
                <span class="text">prathmesh@gmail.com</span>
              </div>
            </div>
          </div>
          <div class="right box">
            <h2>Contact us</h2>
            <div class="content">
              <form action="#">
                <div class="email">
                  <div class="text">Email *</div>
                  <input type="email" required />
                </div>
                <div class="msg">
                  <div class="text">Message *</div>
                  <textarea id="msgForm" rows="2" cols="25" required></textarea>
                  <br />
                  <div class="btn">
                    <button type="submit">Send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
