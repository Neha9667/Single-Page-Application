import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
    <div className="container_class">
      <div className="Container">
        <img src="Images/Logo.png" height="100" width="350" />
      </div>
      <div className="hero_section">
        <p>A Suite of Business Support Services</p>
      </div>
      <div className="text">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
        esse porro a enim, non iusto? </p>
      </div>
      </div>
      <section className="work">
        <div className="grid_item">
          <div className="card">
            <div className="image_container">
              <img src="Assets/title1.png" width="50" height="50"/>
              <img src="Assets/Icon1.svg" alt="Web development" width="170" height="60" />
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
                esse porro a enim, non iusto?
              </p>
          </div>
        </div>
        <div className="grid_item">
          <div className="card">
            <div className="image_container">
            <img src="Assets/title2.png" width="50" height="50"/>
              <img src="Assets/Icon2.svg" alt="ui ux design" width="170" height="60"/>
            </div>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
                molestiae fuga, nesciunt eum nam nulla!
              </p>
          </div>
        </div>
        <div className="grid_item">
          <div className="card">
            <div className="image_container">
            <img src="Assets/title3.png" width="50" height="50"/>
              <img src="Assets/Icon3.svg" alt="app development" width="170" height="60"/>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                debitis quas doloribus voluptate omnis quibusdam.
              </p>
          </div>
        </div>

        <div className="grid_item">
          <div className="card">
            <div className="image_container">
            <img src="Assets/title4.png" width="50" height="50"/>
              <img src="Assets/Icon4.svg" alt="app development" width="170" height="60"
              />
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                debitis quas doloribus voluptate omnis quibusdam.
              </p>
          </div>
        </div>
        <div className="grid_item">
          <div className="card">
            <div className="image_container">
            <img src="Assets/title5.png" width="50" height="50"/>
              <img src="Assets/Icon5.svg" alt="app development" width="170" height="60"/>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                debitis quas doloribus voluptate omnis quibusdam.
              </p>
          </div>
        </div>
        <div className="grid_item">
          <div className="card">
            <div className="image_container">
            <img src="Assets/title6.png" width="50" height="50"/>
              <img src="Assets/Icon6.svg" alt="app development" width="170" height="60" />
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                debitis quas doloribus voluptate omnis quibusdam.
              </p>
          </div>
        </div>
        
      </section>
      </>
  );
}

export default Header;
