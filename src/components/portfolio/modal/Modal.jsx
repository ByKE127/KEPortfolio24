import React from "react";
import CloseImg from "../../../assets/img/cancel.svg";
import PortfolioData from "../portfolioData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Modal component that displays details for a selected portfolio item
const Modal = ({ modalId, setGetModal }) => {
  // Settings for the image slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };

  // Find the selected portfolio item based on the modalId
  const item = PortfolioData.find((item) => item.id === modalId);

  // If no item is found, don't render anything
  if (!item) return null;

  return (
    <div className="modal_portfolio">
      {/* Click outside content to close modal */}
      <div className="modal__outside" onClick={() => setGetModal(false)}></div>

      <div className="modal__content">
        <div key={item.id} data-aos="fade">
          {/* Heading with the item type (e.g. Web Design, Graphic Design) */}
          <h2 className="heading mb-2">{item.type}</h2>

          {/* Modal details: project name, client, tools used, etc. */}
          <div className="modal__details">
            {item.modalDetails.map((details, i) => (
              <div key={i} className="row open-sans-font">
                {details.project && (
                  <div className="col-12 col-sm-6 mb-2">
                    <i className="fa fa-file-text-o pr-2"></i>
                    Project: <span className="ft-wt-600 uppercase">{details.project}</span>
                  </div>
                )}
                {details.client && (
                  <div className="col-12 col-sm-6 mb-2">
                    <i className="fa fa-user-o pr-2"></i>
                    Client: <span className="ft-wt-600 uppercase">{details.client}</span>
                  </div>
                )}
                {details.language && (
                  <div className="col-12 col-sm-6 mb-2">
                    <i className="fa fa-code pr-2"></i>
                    Language: <span className="ft-wt-600 uppercase">{details.language}</span>
                  </div>
                )}
                {details.program && (
                  <div className="col-12 col-sm-6 mb-2">
                    <i className="fa fa-desktop pr-2"></i>
                    Program: <span className="ft-wt-600 uppercase">{details.program}</span>
                  </div>
                )}
                {details.link && (
                  <div className="col-12 col-sm-6 mb-2">
                    <i className="fa fa-external-link pr-2"></i>
                    Preview: <a
                      className="preview-link"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      href={details.link}
                    >
                      {details.preview || details.link}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Image or slider of the project */}
          <figure className="modal__img">
            {item.image && (
              <Slider {...settings}>
                <div>
                  <img src={item.image} alt="portfolio project demo" />
                </div>
              </Slider>
            )}
          </figure>

          {/* Close button */}
          <button className="close-modal" onClick={() => setGetModal(false)}>
            <img src={CloseImg} alt="close modal" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
