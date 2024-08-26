import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="homepage">
      <Nav></Nav>
     <div className="container home-intro">
     <h1>Your Guide To Farming</h1>
      <p>Experience the future of farming with our cutting edge technology solutins. Harness the power of drones. IOT sensors
        and AI-driven analytics to revolutionize your  agriculture practices increase yields.optimize resource usage,and ensure 
        sustainable farming for generations to come join us in shaping the future of agriculture today.
      </p>
      <Link className="btn home-btn mt-2" id="homebtn" to='/Services'>Get Started  <i className="fa-solid fa-arrow-right-long"></i></Link>
    </div>
    </div>
  );
};

export default Home;
