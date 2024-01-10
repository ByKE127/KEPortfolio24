import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Kevin" },
  { meta: "Location", metaInfo: "New York Metropolitan Area" },
  { meta: "last name", metaInfo: "Edwards" },
  { meta: "Email", metaInfo: "ByKevinEdwards@gmail.com" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
