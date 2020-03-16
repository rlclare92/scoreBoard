import React, { Component } from 'react'

 class Popup extends Component {
    render() {
        return (
            <div className="popup">
                <div>
                    <h1>{this.props.text}</h1>
                    <button onClick={this.props.closePopup}>Close</button>/>
                </div>
            </div>
        )
    } 
}
export default Popup