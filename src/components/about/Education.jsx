import React from "react";

const educationContent = [
  {
    year: "2015 - 2019",
    degree: "BACHELORS DEGREE",
    institute: "RAMAPO COLLEGE OF NEW JERSEY",
    details: `Degree in Design/Marketing. 
    Relevant coursework include Web Design, Graphic Design, Publication Design, and Photography for Designers.
     Marketing coursework like Entreprenuership, Consumer Behavior, Branding & Brand Management, and International Marketing.`,
  },
  
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
