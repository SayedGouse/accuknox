import React from "react";

const AddCard = ({closeModal}) => {
 
  return (
    
          <div className="insideadd">
            <button className="btnadd" onClick={closeModal}> + Add Widget</button>
          </div>
     
  );
};

export default AddCard;
