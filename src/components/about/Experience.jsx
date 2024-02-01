import React from "react";

const experienceContent = [
  {
    year: "06/2022 - Present",
    position: "Web Designer/Digital Content Admin",
    compnayName: "Todd Snyder NY",
    details: `• Manage the online store and created new templates in Liquid. 
    • Aid the design of wireframes for email/web pages in Figma.
    • Partner with marketing to test conversion rates using the Google Suite.
    • Troubleshoot bugs across applications and on site.`,
  },
  {
    year: "6/2021 - 4/2022",
    position: "Front End Developer",
    compnayName: "My.Suit NY (Contract)",
    details: `• Designed new pages seamlessly into the front-end and back-end of their website using HTML, CSS, and Javascript.
    • Created newsletter articles to send out to customers.
    • Worked closely with various teams to code new ideas for testing.
    • Writes descriptions for products to sell to a specific audience.`,
  },
  {
    year: "3/2020 - 2/2021",
    position: "Graphic/Web Design & Marketing",
    compnayName: "The Glass Underground",
    details: `• Managed a Shopify store and controlled sales/discounts.
    • Used MailChimp/Canva for e-mail and social media marketing.
    • Created designs to cut out using a WazerWAM.
    • Wrote copy for products to sell to a specific audience.`,
  },
  {
    year: "1/2020 - 3/2020",
    position: "Digital Media Coordinator Internship",
    compnayName: "AboveMAX Basketball",
    details: `• Created content and managed all social media platforms for the company.
    • Monitored analytical data and engagement rates.
    • Used HootSuite to schedule post across social media platforms.
    • Managed the WordPress eCommerce store and scheduling for team practices.`,
  },
  {
    year: "9/2019 - 12/2019",
    position: "Communications/Marketing Internship",
    compnayName: "Ramapo Athletics",
    details: `• Designed and monitored social media posts for the college’s athletics program.
    • Worked effectively with team members to drive traffic to the sporting events.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font" style={{ whiteSpace: 'pre-line' }}>{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
