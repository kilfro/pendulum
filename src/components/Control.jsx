import React from 'react'
import '@style/control.less'
import {setGravity, setInitialImpulse, setThreadLength, setWeight} from '../store/actionCreators'
import {connect} from 'react-redux'

const Control = ({gravity, length, weight, impulse, setThreadLength, setWeight, setGravity, setInitialImpulse}) => {
    const settersMap = {
        length: {
            description: 'Длина подвеса',
            min: 10,
            max: 30,
            step: 0.1,
            value: length,
            set: setThreadLength,
        },
        weight: {
            description: 'Вес груза',
            min: 20,
            max: 100,
            value: weight,
            set: setWeight,
        },
        gravity: {
            description: 'Сила притяжения',
            min: 1,
            max: 100,
            step: 0.1,
            value: gravity,
            set: setGravity,
        },
        impulse: {
            description: 'Начальный импульс',
            min: 1,
            max: 60,
            value: impulse,
            set: setInitialImpulse,
        },
    }

    return (
        <div className="control">
            {
                Object.entries(settersMap).map(([key, option]) => {
                        const {set, description, ...rest} = option
                        const inputProps = {
                            ...rest,
                            name: key,
                            onChange: event => {
                                set(event.target.value)
                            }
                        }

                        return (
                            <div className="control-group" key={key}>
                                <label htmlFor={key}>{description}: {option.value}</label>
                                <input type="range" {...inputProps}/>
                            </div>)
                    }
                )
            }
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