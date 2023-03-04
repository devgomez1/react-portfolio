import React from "react";

function nav(props) {
  const { currentTab, setCurrentTab } = props;
  return (
    <nav>
      <ul className="justify-content-center">
        <li className={currentTab === "about"}>
          <span onClick={() => setCurrentTab("about")}>About Me</span>
        </li>

        <li className={currentTab === "portfolio"}>
          <span onClick={() => setCurrentTab("portfolio")}>Portfolio</span>
        </li>

        <li className={currentTab === "contact"}>
          <span onClick={() => setCurrentTab("contact")}>Contact</span>
        </li>

        <li className={currentTab === "resume"}>
          <span onClick={() => setCurrentTab("resume")}>Resume</span>
        </li>
      </ul>
    </nav>
  );
}
