import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <header className="header">
            <h1 className="header-title">Make MyNews your homepage</h1>
            <h2 className="header-description">
              Every day discover what’s trending on the internet!
            </h2>
            <div className="header-get-btn">GET</div>
            <h1 className="header-decline">No, thanks</h1>
          </header>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
