import React from 'react'
import '@style/control.less'
import {setGravity, setInitialImpulse, setThreadLength, setWeight} from '../store/actionCreators'
import {connect} from 'react-redux'

const Control = ({gravity, length, weight, impulse, setThreadLength, setWeight, setGravity, setInitialImpulse}) => {
    const threadLengthHolder = event => setThreadLength(event.target.value)
    const weightHolder = event => setWeight(event.target.value)
    const gravityHolder = event => setGravity(event.target.value)
    const impulseHolder = event => setInitialImpulse(event.target.value)

    return (
        <div className="control">
            <div className="control-group">
                <label htmlFor="thread-length">Длина подвеса: {length}</label>
                <input type="range" name="thread-length" min="100" max="1000" value={length}
                       onChange={threadLengthHolder}/>
            </div>
            <div className="control-group">
                <label htmlFor="ball-weight">Вес груза: {weight}</label>
                <input type="range" name="ball-weight" min="50" max="500" value={weight} onChange={weightHolder}/>
            </div>
            <div className="control-group">
                <label htmlFor="gravity">Сила притяжения: {gravity}</label>
                <input type="range" name="gravity" min="1" max="100" step="0.1" value={gravity} onChange={gravityHolder}/>
            </div>
            <div className="control-group">
                <label htmlFor="momentum">Начальный импульс: {impulse}</label>
                <input type="range" name="momentum" min="1" max="1000" value={impulse} onChange={impulseHolder}/>
            </div>
        </div>
    )
}

const mapStateToProps = state => state

const mapDispatchToProps = {
    setThreadLength,
    setWeight,
    setGravity,
    setInitialImpulse,
}

export default connect(mapStateToProps, mapDispatchToProps)(Control)