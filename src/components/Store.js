import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Store = () => {
  return (
    <div className="container">
      <Nav></Nav>
      <div className="container store-container">
        <div className="row store-row">
          <div className="col-lg-3 col-md-3 store-item">
            <div className="card">
              <img
                className="card-img-top"
                src="https://th.bing.com/th/id/OIP.bBzH34W4G_m4y4dFM0HAawHaE8?rs=1&pid=ImgDetMain"
              ></img>
              <div className="card-body">
                <h3 className="card-title">Chia Seeds</h3>

                <Link className="btn store-btn" to="/services/Store">
                  Start selling
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 store-item">
            <div className="card">
              <img
                className="card-img-top"
                src="https://www.taropumps.com/media/2538/type-of-seeds-2.jpg"
              ></img>
              <div className="card-body">
                <h3 className="card-title">Egusi seeds</h3>

                <Link className="btn store-btn" to="/services/Store">
                  Start selling
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 store-item">
            <div className="card">
              <img
                className="card-img-top"
                src="https://th.bing.com/th/id/OIP._hDc8detMX11rpcFyRIG5AHaE9?rs=1&pid=ImgDetMain"
              ></img>
              <div className="card-body">
                <h3 className="card-title">Flax seeds</h3>

                <Link className="btn store-btn" to="/services/Store">
                  Start selling
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 store-item">
            <div className="card">
              <img
                className="card-img-top"
                src="https://th.bing.com/th/id/OIP.du73i3qj_1TCb3vDQsRCpgHaFF?rs=1&pid=ImgDetMain"
              ></img>
              <div className="card-body">
                <h3 className="card-title">Hemp seeds</h3>

                <Link className="btn store-btn" to="/services/Store">
                  Start selling
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 store-item">
            <div className="card">
              <img
                className="card-img-top"
                src="https://th.bing.com/th/id/OIP.Yeq0F2PpzV5O0L6pHOdQ1wHaEg?w=277&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
              ></img>
              <div className="card-body">
                <h3 className="card-title">Pumpkin seeds</h3>

                <Link className="btn store-btn" to="/services/Store">
                  Start selling
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 store-item">
          <div className="card">
              <img
                className="card-img-top"
                src="https://th.bing.com/th/id/OIP.wNK4uckKwuMALH84LkeOawHaE8?rs=1&pid=ImgDetMain"
              ></img>
              <div className="card-body">
                <h3 className="card-title">Poppy seeds</h3>

                <Link className="btn store-btn" to="/services/Store">
                  Start selling
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 store-item">
          <div className="card">
              <img
                className="card-img-top"
                src="https://th.bing.com/th/id/OIP.GJXOmgAMA4U4_fKSDnWETQHaE7?rs=1&pid=ImgDetMain"
              ></img>
              <div className="card-body">
                <h3 className="card-title">Melon seeds</h3>

                <Link className="btn store-btn" to="/services/Store">
                  Start selling
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 store-item">
          <div className="card">
              <img
                className="card-img-top"
                src="https://th.bing.com/th/id/OIP.Jg9ZwSdw5jN0R4OUfnYdzQAAAA?rs=1&pid=ImgDetMain"
              ></img>
              <div className="card-body">
                <h3 className="card-title">Lotus seeds</h3>

                <Link className="btn store-btn" to="/services/Store">
                  Start selling
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
