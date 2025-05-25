import React from "react";

const experienceContent = [
  {
    year: "06/2022 - Present",
    position: "UX/UI Web Designer",
    compnayName: "Todd Snyder NY",
    details: `• Optimize mobile & desktop UX with responsive HTML & CSS, increasing site speed by 10%.
    • Partner with marketing teams to A/B test dynamic content, analyze KPIs, and improve conversion rates.
    • Drove the start up of Made-to-Measure bookings, increasing sales by 20%.
    • Troubleshoot front-end bugs in production environments.`,
  },
  {
    year: "6/2021 - 4/2022",
    position: "Front End Developer/Email Specialist",
    compnayName: "My.Suit NY",
    details: `•Developed HTML email newsletters, improving open rates by 18% through personalized campaigns.
    • Designed and compressed pages with HTML & CSS driving a 12% increase in site speed.
    • Collaborated with development teams to ensure timely publication of new site content.`,
  },
  {
    year: "3/2020 - 2/2021",
    position: "Graphic/Web Design & Marketing",
    compnayName: "The Glass Underground",
    details: `• Managed the UX layout and organized promotional flows to increase online sales by 15%.
    • Developed branded content for email and social channels using Canva and Adobe Creative Suite.
    • Composed product copy aligned tailored to a specific audience.`,
  },
  {
    year: "1/2020 - 3/2020",
    position: "Digital Content/Marketing Internship",
    compnayName: "AboveMAX Basketball",
    details: `• Managed visual and structural updates for WordPress-based DTC storefronts.
    • Created platform-specific content calendars across Instagram, Twitter, and Facebook using Hootsuite.
    • Assessed and adapted strategies using user engagement data.`,
  },
  {
    year: "9/2019 - 12/2019",
    position: "Communications/Marketing Internship",
    compnayName: "Ramapo Athletics",
    details: `• Worked effectively with various teams to drive traffic to sporting events.
    • Designed and monitored social media posts for the athletics department, boosting engagement rates by 7%.`,
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
