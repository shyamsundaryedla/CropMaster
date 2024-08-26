import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <Nav></Nav>
        <div className="services  container">
            <div className="row service-row">
            <div className="col-lg-4 col-md-8  service-item">
                <div className="card">
                <img
              className="card-img-top"
              src="https://cdn.pixabay.com/photo/2020/03/28/15/35/paddy-4977497_960_720.jpg"
            ></img>
            <div className="card-body">
              <h2 className="card-title">Crop Recommendation</h2>
              <p className="card-text">
                Our advances crop Recommendation system helps you to choose the
                best crops for you to choose the best crops for your land and
                climate conditions.
              </p>
              <Link className="btn" to='/Services/Crop-recomendation'>Learn More</Link>
            </div>

                </div>

            </div>
            <div className="col-lg-4  col-md-8  service-item">
            <div className="card">
                <img
              className="card-img-top"
              src="https://th.bing.com/th/id/OIP.0gEnNKXeF7knp0QPSPw3ZQHaE7?rs=1&pid=ImgDetMain"
            ></img>
            <div className="card-body">
              <h2 className="card-title">Disease Identifier</h2>
              <p className="card-text">
              Identify plant disease early with our AI- driven disease identifier tool.Upload an image of your crop, and get  analysis and 
                treatment suggestions.

              </p>
              <Link className="btn" to='/Services/Disease-Prediction'>Try it out</Link>
            </div>

                </div>
            </div>
            <div className="col-lg-4 col-md-8  service-item">
            <div className="card">
                <img
              className="card-img-top"
              src="https://th.bing.com/th/id/OIP._hDc8detMX11rpcFyRIG5AHaE9?rs=1&pid=ImgDetMain"
            ></img>
            <div className="card-body">
              <h2 className="card-title">Seed and Fertilizer Store</h2>
              <p className="card-text">
              Shop for success! Explore a variety of high-quality seeds and Fertilizers. From organic to hybrid
               find the perfect match for your crops.

              </p>
              <Link className="btn" to='/services/Store'>Start selling</Link>
            </div>

                </div>
            </div>

            </div>

        </div>
    </div>
  );
};

export default Services;
