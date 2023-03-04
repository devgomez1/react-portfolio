import React from "react";

function nav(props) {
  const { currentTab, setCurrentTab } = props;
  return (
    <ul class="nav justify-content-end">
      <li class="nav-item">
        <a class="nav-link active" href="#">
          Active
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          Link
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          Link
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">
          Disabled
        </a>
      </li>
    </ul>
  );
}
