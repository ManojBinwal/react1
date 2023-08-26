import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ToggleButton from './ToggleButton'

const Navbar = (props) => {
    

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>

                {/* <div className="form-check form-switch">
                <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
                     </div> */}

                

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.about}</a>
                        </li>
                    </ul>
                    <form className="d-flex px-3 py-1 my-2" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form>
                    <ToggleButton textCol={props.textCol} buttonText={props.buttonText} toggle = {props.toggle} />
                </div>
                
            </div>
           
        </nav>
    )
}

//defining proptypes - data type for props
// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,
//     home: PropTypes.string,
//     about: PropTypes.string,
// }
// // default values of props 
// Navbar.defaultProps = {
//     title: 'set title here',
//     home: 'set Home text here',
//     about: 'set about text here'
// }

export default Navbar

