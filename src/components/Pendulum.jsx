import React, {useEffect, useState} from 'react'
import '@style/pendulum.less'
import {connect} from 'react-redux'

export const Pendulum = ({length, impulse, gravity, weight}) => {
    const [time, setTime] = useState(0)
    const [angel, setAngel] = useState(0)
    const timeout = 5

    const calculateCurrentAngel = (timeInSeconds) => {
        return impulse * Math.sin(Math.sqrt(gravity / (length / 100)) * timeInSeconds)
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setAngel(calculateCurrentAngel(time / 1000))
            setTime(prev => prev + timeout)
        }, timeout)

        return () => clearInterval(intervalId)
    }, [time])

    const pendulumStyle = {
        height: `${length}cm`,
        transform: `rotate(${angel}deg)`
    }

    const ballStyle = {
        bottom: -weight,
        left: weight * -0.5,
        width: `${weight}px`,
        height: `${weight}px`,
    }

    return (
        <div className="pendulum">
            <div className="thread" style={pendulumStyle}>
                <div className="ball" style={ballStyle}/>
            </div>
        </div>
    )
}
const mapStateToProps = state => state

export default connect(mapStateToProps)(Pendulum)