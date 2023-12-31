import React from 'react'

export default function Alert(props) {
    const Capitalise = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + word.slice()
    }
    return (
        props.alert &&
        <div>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.type} </strong> : {props.alert.message}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    )
}
