import style from "./style/style.css";
import logo from "../Resources/Logo.png";
import search_icon from "../Resources/searchIcon.png";
import btnArrow from "../Resources/arrow_2.png";
import carLogo from "../Resources/carLogo.png";
import RArrow from "../Resources/right.png";
import LArrow from "../Resources/left.png";
import lambo from "../Resources/car.png";
import arrow from "../Resources/arrow.png";
import VideoIcon from "../Resources/VideoIcon.png";
import img1 from "../Resources/matt-antonioli-T_ZdgxzPS5k-unsplash.jpg";
import img2 from "../Resources/wes-tindel-_9Ru-w4w100-unsplash.jpg";
function Home() {
  return (
    <section style={style}>
      <nav>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>Collection</li>
            <li>Services</li>
            <li>About</li>
          </ul>
        </div>

        <div className="logo">
          <div className="img-container">
            <img src={logo} alt="" />
          </div>
        </div>

        <div className="search">
          <img src={search_icon} alt="" />
          <p>search</p>
        </div>
      </nav>

      <center>
        <div className="divider"></div>
      </center>

      <main>
        <div className="header">
          <div className="left">
            <div className="img-container">
              <img src={img1} alt="" />
            </div>
          </div>
          <div className="content">
            <h1>Lamborghini</h1>
            <p>
              The meticulous design of these cars makes them visually innovative
              and stunning.
            </p>
          </div>
          <div className="right">
            <div className="carLogo">
              <img src={carLogo} alt="" />
            </div>
          </div>
        </div>

        <div className="lambo">
          <div className="img-container">
            <img src={lambo} alt="" />
          </div>
        </div>

        <div className="others">
          <div className="switcher">
            <div className="left">
              <p>Prev</p>
              <img src={LArrow} alt="" />
            </div>
            <div className="right">
              <p>Next</p>
              <img src={RArrow} alt="" />
            </div>
          </div>

          <div className="btns">
            <button>
              <p>EXPLORE</p> <img src={btnArrow} alt="" />
            </button>

            <img className="arrow" src={arrow} alt="" />
            <p>Over 32k software businesses growing with us</p>
          </div>

          <div className="video-container">
            <div className="content">
              <h1>2023</h1>
              <p>Trending Collection</p>
            </div>
            <div className="img-container">
              <img src={img2} alt="" />
              <img src={VideoIcon} alt="" />
            </div>
          </div>
        </div>

        <div className="rec"></div>
      </main>
    </section>
  );
}

export default Home;
