import React from "react";

const skillsContent = [
  { skillClass: "p100", skillPercent: "100", skillName: "HTML" },
  { skillClass: "p100", skillPercent: "100", skillName: "CSS" },
  { skillClass: "p85", skillPercent: "85", skillName: "JAVASCRIPT" },
  { skillClass: "p80", skillPercent: "80", skillName: "REACTJS" },
  { skillClass: "p95", skillPercent: "95", skillName: "GOOGLE ANALYTICS" },
  { skillClass: "p90", skillPercent: "90", skillName: "ADOBE CREATIVE SUITE" },
  { skillClass: "p100", skillPercent: "100", skillName: "FIGMA" },
  { skillClass: "p80", skillPercent: "80", skillName: "SEO" },
  { skillClass: "p100", skillPercent: "100", skillName: "EMAIL MARKETING" },
  { skillClass: "p96", skillPercent: "96", skillName: "SHOPIFY" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
