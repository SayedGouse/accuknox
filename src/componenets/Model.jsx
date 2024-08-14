import React, { useState } from "react";

const Model = ({ closeModal, handleWidgetToggle, visibleWidgets, widgetNames }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const categories = ['CSPM', 'CWPP', 'Image', 'Tickets'];

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="d11">
          <h6>Add Widget</h6>
          <h6 style={{ cursor: "pointer" }} onClick={closeModal}>X</h6>
        </div>
        <h6 style={{ marginLeft: '10px', marginTop: '10px' }}>
          Personalize your dashboard by adding the following widget
        </h6>
        <div className="d-flex" style={{ cursor: 'pointer' }}>
          {categories.map((item, index) => (
            <div
              key={index}
              className="d12"
              style={{
                borderBottom: activeIndex === index && '3px solid black'
              }}
              onClick={() => handleClick(index)}
            >
              {item}
            </div>
          ))}
        </div>

        {categories.map((category, categoryIndex) => (
          activeIndex === categoryIndex && (
            <div key={categoryIndex} style={{ textAlign: 'start', marginTop: '5px' }}>
              {visibleWidgets[category].map((isVisible, index) => (
                <div key={index} className="d13">
                  <input
                    style={{ marginRight: '5px', marginLeft: '5px' }}
                    type="checkbox"
                    checked={isVisible}
                    onChange={() => handleWidgetToggle(category, index)}
                  />
                  {widgetNames[category][index]} {/* Display the widget name */}
                </div>
              ))}
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default Model;
