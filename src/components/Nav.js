import React from "react";

function Nav(props) {
  const { activeTab, changeTab } = props;
  return (
    <nav>
      <ul className="justify-content-center">
        <li className={activeTab === "about"}>
          <span onClick={() => changeTab("about")}>About Me</span>
        </li>

        <li className={activeTab === "portfolio"}>
          <span onClick={() => changeTab("portfolio")}>Portfolio</span>
        </li>

        <li className={activeTab === "contact"}>
          <span onClick={() => changeTab("contact")}>Contact</span>
        </li>

        <li className={activeTab === "resume"}>
          <span onClick={() => changeTab("resume")}>Resume</span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;