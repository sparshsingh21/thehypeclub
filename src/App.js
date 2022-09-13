import "./App.css";
import back from "./images/naruto.jpg";
import CarouselFront from "./components/CarouselFront";
import Button from "react-bootstrap/Button";
import back1 from "./images/back1.jpg";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">THeHypeClub</div>
        <div className="menu">
          <ul className="nav-list">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/mission">Our-mission</a>
            </li>
            <li>
              <a href="/gallery">Gallery</a>
            </li>
            <li>
              <a href="/buy">Where to Buy</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="heromain">
        <div className="left">
          <img className="img1" src={back} alt="back" />
          <p>Helloooooooooooooooooooooooooooo</p>
          <Button className="btn1" variant="outline-secondary">
            <a href="/discover">⦿ Discover</a>
          </Button>
          <h1 className="hype">TheHypeClub</h1>
        </div>
        <div className="right">
          <CarouselFront />
        </div>
      </div>
      <div className="discover">
        <div className="left2">
          <div className="overlap">
            <img className="backimg" src={back} alt="naruto" />
            <img className="overlapimg" src={back1} alt="narutokeupar" />
          </div>
        </div>
        <div className="right2">
          <h2>
            Explore our new <br /> Hoodie Collection
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled .
          </p>

          <a className="btn2" href="/discover">
            ⦿ OUR MISSION
          </a>
        </div>
      </div>

      <div className="heading">
        <h1>
          Everything you need <br /> to know about The Hype Club
        </h1>
      </div>
      <div className="about">
        <div className="left3">
          <img className='aboutback' src={back} alt='bottom'/>
          <img className='aboutfront' src={back1} alt='front'/>
        </div>
        <div className="right3">
          <div className="box">
            <div className="minibox">
            <h4>COLORS & SHAPES</h4>
            <p>Dal de kuch bhi</p>
            </div>
            <div className="minibox">
            <h4>COLORS & SHAPES</h4>
            <p>Dal de kuch bhi</p>
            </div>
            <div className="minibox">
            <h4>COLORS & SHAPES</h4>
            <p>Dal de kuch bhi</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
