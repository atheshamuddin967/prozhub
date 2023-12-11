import React from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";
import Cards from "../components/Cards";
import MultiStep from "react-multistep";
import Step from "../components/Step";
import { useLocation } from "react-router-dom";
import "../styles/services.css";
import "../styles/Home.css";
import { useState, useEffect } from "react";
import Carousle from "../components/Owlcaroule";
function ServiceDetail() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const openModal = (item) => {
    setIsModalOpen(true);
    setSelectedItem(item);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };
  useEffect(() => {}, [selectedItem]);

  const location = useLocation();
  const { item } = location.state || {};
  console.log(item);
  return (
    <div>
      <div className="views">
        <img src={item.img} alt="img" />
        <div className="View-Heading">
          <h2>Find {item.title} professionals near you</h2>
          <div className="services-form">
            <h5>Where do you need it?</h5>
            <InputField
              type={"text"}
              placeholder={"Enter Your zipcode & Town"}
            ></InputField>
            <Button title={"Continue"} />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row space">
          <div className="col-sm-12">
            <div className="details-description">
              <h2>Need help finding a {item.title} professional?</h2>
              <p>
                You can find the best title professionals on Bark. Start your
                search and get free quotes now!
              </p>
              <p>
                First time looking for a title professional and not sure where
                to start? Tell us about your project and we’ll send you a list
                of titleprofessionals to review. There’s no pressure to hire, so
                you can compare profiles, read previous reviews and ask for more
                information before you make your decision.{" "}
              </p>
              <p>Best of all - it’s completely free!</p>
            </div>

            <div class="linkbtn">
              <button onClick={() => openModal(item)}>
                find an {item.title}professionals today
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && selectedItem && (
        <div className="modals">
          <div className="modal-box">
            <div className="inner-modal">
              <div className="close-btn" onClick={closeModal}>
                <i class="fa-solid fa-xmark"></i>
              </div>
              <div className="modals-header">
                <div className="modals-detail">
                  <MultiStep
                    nextButton={{
                      title: "Next",
                      style: {
                        background: "#3062d9",
                        border: "0px",
                        padding: "5px 20px",
                        borderRadius: 5,
                        color: "#ffff",
                        margin: 10,
                      },
                    }}
                    prevButton={{
                      title: "Back",
                      style: {
                        background: "#ffff",
                        border: "1px solid gray",
                        padding: "5px 20px",
                        borderRadius: 5,
                        color: "black",
                        margin: 10,
                      },
                    }}
                  >
                    {selectedItem?.step1?.map((step1) => (
                      <Step
                        // name={"abcd"}
                        // id={"abcd"}
                        // type={"radio"}
                        image={item.img}
                        showNavigation={false}
                        showTitles={false}
                        item={step1.question}
                        heading={step1.heading}
                      />
                    ))}
                  </MultiStep>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Cards title={item.title} />

      <div class="linkbtn text-center space">
        <button onClick={() => openModal(item)}>
          Get quote from {item.title}professionals near you
        </button>
      </div>
      <div className="container">
        <div className="row space">
          <div className="col-sm-12">
            <h1>Populr Cities</h1>
          </div>
        </div>

        <div className="row">
          <Carousle />
        </div>

        <div className="row"></div>
      </div>
    </div>
  );
}

export default ServiceDetail;
