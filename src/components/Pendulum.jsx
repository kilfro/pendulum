import React from 'react'
import '@style/pendulum.less'
import {connect} from 'react-redux'

const Pendulum = ({length}) => {
    const pendulumStyle = {
        height: `${length}px`,
    }

    return (
        <div className="pendulum">
            <div className="thread" style={pendulumStyle}/>
        </div>
    )
}
const mapStateToProps = state => state

export default connect(mapStateToProps)(Pendulum)