import React from "react";
import "../styles/Login.scss";

const About = () => {
  return (
    <div>
      <section className="section">
        <div className="two-columns">
          <div className="stayHereImg">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Color_icon_green.svg/800px-Color_icon_green.svg.png"
              alt="image review"
            />
          </div>

          <div className="stayHereTxt">
            <div className="row-stay-here">
              <form>
                <div className="header-section stayHere">
                  <h2>
                    Log <span>In</span>
                  </h2>
                </div>

                <div>
                  <div>
                    <label>Email: </label>
                    <input name="name" type="text" />
                  </div>

                  <div>
                    <label>Password: </label>
                    <input name="image" type="text" />
                  </div>

                  <div>
                    <button type="submit">Log in</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
