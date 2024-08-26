import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const About = () => {
    return ( 
        <div className="container About">
            <Nav></Nav>
           
                <div className=" row About-row">
                <div className="col-lg-6  about-item" id="about-item-1">
                        <img src="https://cdn.pixabay.com/photo/2024/04/20/11/47/ai-generated-8708404_1280.jpg"></img>
                    </div>
                    <div  className="col-lg-6 about-item">
                        <h2>About us</h2>
                        <p>Crop Master is the destination for integrating modern technology into agriculture. 
                            Our website is dedicated to empowering farmers and agricultural enthusiasts with cutting-edge
                             tools and innovations that enhance productivity and sustainability. From precision farming techniques
                              and advanced irrigation systems to drone technology and smart sensors, AgriTech Solutions offers a wealth
                               of resources to help you stay ahead in the agricultural sector. With our user-friendly interface 
                               and expert insights, we make it easy to adopt and implement the latest technological advancements 
                               in your farming practices. Join us in transforming agriculture with modern technology for a more 
                               efficient and prosperous future.Stay ahead with our expert insights and advanced farming techniques.Discover advanced tools and innovations for modern farming with us.
                        </p>
                        <a className="btn  about-btn">Explore more</a>
                    </div>
                    

                </div>
           
        </div>
     );
}
 
export default About;