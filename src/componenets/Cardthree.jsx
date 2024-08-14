import React from "react";
import MultiProgress from "react-multi-progress";

const Cardthree = ({ removeWidget , name}) => {
  return (
    <>
      <div className="inside">
        <div className="habeeb">
          <h6 style={{ marginLeft: "13px", marginTop: "5px" }}>{name}</h6>

          <div className="X" onClick={removeWidget}> X </div>
        </div>
        <div className="nographone">
          <h6 style={{ marginLeft: "10px" }}>(9) Total numbers</h6>
          <div className="extra">
            <MultiProgress
              elements={[
                {
                  value: 25,
                  color: "blue",
                },
                {
                  value: 25,
                  color: "red",
                },
                {
                  value: 25,
                  color: "blue",
                },
                {
                  value: 25,
                  color: "yellow",
                },
              ]}
            />
          </div>
          <div className="boy">
          <div className="nibbi">
            <div className="colr">
            </div>
              <div>Images (9)</div>
          </div>
          <div className="nibbi">
            <div className="colr">
            </div>
              <div>Images (9)</div>
          </div>
          </div>
          <div className="boy">
          <div className="nibbi">
            <div className="colr">
            </div>
              <div>Images (9)</div>
          </div>
          <div className="nibbi">
            <div className="colr">
            </div>
              <div>Images (9)</div>
          </div>
          </div>
          
         
        </div>
      </div>
    </>
  );
};

export default Cardthree;
