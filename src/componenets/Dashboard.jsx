import React, { useState } from "react";
import Header from "./Header";
import { GiClockwiseRotation } from "react-icons/gi";
import { HiDotsVertical } from "react-icons/hi";
import { MdWatchLater } from "react-icons/md";
import Cardone from "./Cardone";
import AddCard from "./AddCard";
import Cardtwo from "./Cardtwo";
import Cardthree from "./Cardthree";
import Model from "./Model";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleWidgets, setVisibleWidgets] = useState({
    CSPM: [true, true, true],
    CWPP: [true, true, true],
    Image: [true, true, true],
    Tickets: [true, true, true],
  });

  const handleWidgetToggle = (category, index) => {
    setVisibleWidgets((prevState) => ({
      ...prevState,
      [category]: prevState[category].map((visible, i) =>
        i === index ? !visible : visible
      ),
    }));
  };

  const widgetNames = {
    CSPM: ["Cloud Account", "Cloud Risk Account", "Cloud Security Posture"],
    CWPP: [
      "Workload Protection",
      "Threat Detection",
      "Vulnerability Management",
    ],
    Image: ["Registry Scan", "Image Scan", "Container Security"],
    Tickets: ["Open Tickets", "Closed Tickets", "In Progress Tickets"],
  };

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const filterWidgets = (category) => {
    return widgetNames[category].filter((name) =>
      name.toLowerCase().includes(searchQuery)
    );
  };

  return (
    <>
      <div className="main">
        <div>
          <Header handleSearch={handleSearch} />
          <div className="box">
            <div className="d1 p-4">
              <h4>CNAPP Dashboard</h4>
              <div className="d-flex justify-content-center">
                <button className="btnadd" onClick={() => setShowModal(true)}>
                  Add Widget +
                </button>
                <div className="ro">
                  <GiClockwiseRotation />
                </div>
                <div className="dot">
                  <HiDotsVertical />
                </div>
                <div className="d2">
                  <div>
                    <MdWatchLater size={22} />
                  </div>
                  <div className="line" />
                  <select className="sel">
                    <option className="one">last 1 day</option>
                    <option className="one">last 2 days</option>
                    <option className="one">last 3 days</option>
                  </select>
                </div>
              </div>
            </div>

            {/* CSPM Widgets */}
            <div>
              <h6 className="abcd">CSPM Executive Dashboard</h6>
              <div className="container-fluid abcdf">
                <div className="rowon">
                  {visibleWidgets.CSPM.map((isVisible, index) =>
                    isVisible &&
                    filterWidgets("CSPM").includes(widgetNames.CSPM[index]) ? (
                      <div key={index} className="card-one">
                        <Cardone
                          index={index + 1}
                          name={widgetNames.CSPM[index]}
                          removeWidget={() => handleWidgetToggle("CSPM", index)}
                        />
                      </div>
                    ) : null
                  )}
                  <div className="card-one">
                    <AddCard closeModal={() => setShowModal(true)} />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h6 className="abcd">CWPP Dashboard</h6>
              <div className="container-fluid abcdf">
                <div className="rowon">
                  {visibleWidgets.CWPP.map((isVisible, index) =>
                    isVisible &&
                    filterWidgets("CWPP").includes(widgetNames.CWPP[index]) ? (
                      <div key={index} className="card-one">
                        <Cardtwo
                          index={index + 1}
                          name={widgetNames.CWPP[index]}
                          removeWidget={() => handleWidgetToggle("CWPP", index)}
                        />
                      </div>
                    ) : null
                  )}
                  <div className="card-one">
                    <AddCard closeModal={() => setShowModal(true)} />
                  </div>
                </div>
              </div>
            </div>

            {/* Image Widgets */}
            <div>
              <h6 className="abcd">Registry Scan</h6>
              <div className="container-fluid abcdf">
                <div className="rowon">
                  {visibleWidgets.Image.map((isVisible, index) =>
                    isVisible &&
                    filterWidgets("Image").includes(
                      widgetNames.Image[index]
                    ) ? (
                      <div key={index} className="card-one">
                        <Cardthree
                          index={index + 1}
                          name={widgetNames.Image[index]}
                          removeWidget={() =>
                            handleWidgetToggle("Image", index)
                          }
                        />
                      </div>
                    ) : null
                  )}
                  <div className="card-one">
                    <AddCard closeModal={() => setShowModal(true)} />
                  </div>
                </div>
              </div>
            </div>

            {/* Tickets Widgets */}
            <div>
              <h6 className="abcd">Tickets Dashboard</h6>
              <div className="container-fluid abcdf">
                <div className="rowon">
                  {visibleWidgets.Tickets.map((isVisible, index) =>
                    isVisible &&
                    filterWidgets("Tickets").includes(
                      widgetNames.Tickets[index]
                    ) ? (
                      <div key={index} className="card-one">
                        <Cardtwo
                          index={index + 1}
                          name={widgetNames.Tickets[index]}
                          removeWidget={() =>
                            handleWidgetToggle("Tickets", index)
                          }
                        />
                      </div>
                    ) : null
                  )}
                  <div className="card-one">
                    <AddCard closeModal={() => setShowModal(true)} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {showModal && (
        <Model
          closeModal={() => setShowModal(false)}
          handleWidgetToggle={handleWidgetToggle}
          visibleWidgets={visibleWidgets}
          widgetNames={widgetNames}
        />
      )}
    </>
  );
};

export default Dashboard;
