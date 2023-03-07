import React from "react";
import Nav from "./Nav";

function Header(props) {
  const { activeTab, changeTab } = props;

  return (

    <header>

      <section>
        <div>
          <h1>Devin Gomez - Web Developer</h1>
        </div>
      </section>

      <section>
        <div>
          <Nav activeTab={activeTab} changeTab={changeTab}></Nav>
        </div>
      </section>

    </header>
    
  );
}

export default Header