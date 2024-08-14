import React from 'react'
import { VscGraph } from "react-icons/vsc";

const Cardfour = ({ removeWidget, name }) => {
  return (
    <>
      <div className="inside">
        <div className="habeeb">
            <h6 style={{marginLeft:'13px',marginTop:'5px'}}>{name}</h6>
          
          <div className="X" onClick={removeWidget}> X </div>
        </div>
        <div className='nograph'>
            <div>

        <VscGraph
            size={72}
            style={{marginLeft:'30px'}}
          />
          <h6>No Graph Available</h6>
            </div>

        </div>
        
      </div>
    </>
  )
}

export default Cardfour
