import React, {Component} from 'react'

import './nball.css'


class NBall extends Component {


    render() {
        return <div className="ball">
            <h1>{this.props.number}</h1>
        </div>
    }
}



export default NBall;
