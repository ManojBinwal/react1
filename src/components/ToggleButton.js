import React from 'react'

export default function ToggleButton(props) {
  return (
    <div className='m-0 p-0'>
      <div className="form-check form-switch">
                <input className="form-check-input " onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className={`form-check-label text-${props.textCol}`} htmlFor="flexSwitchCheckDefault">{props.buttonText}</label>
            </div>
    </div>
  )
}
