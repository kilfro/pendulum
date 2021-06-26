import React from 'react'
import '@style/control.less'
import {IControlMap} from '../types/ContorolTypes'
import {useTypedSelector} from '../hooks/useTypedSelector'
import {useActions} from '../hooks/useActions'

export const Control: React.FC = () => {
    const {length, impulse, gravity, weight} = useTypedSelector(state => state)
    const {setLength, setGravity, setWeight, setImpulse} = useActions()

    const settersMap: IControlMap = {
        length: {
            description: 'Длина подвеса',
            min: 10,
            max: 30,
            step: 0.1,
            value: length,
            set: setLength,
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
            set: setImpulse,
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
                            onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                                set(event.target.value)
                            },
                        }

                        return (
                            <div className="control-group" key={key}>
                                <label htmlFor={key}>{description}: {option.value}</label>
                                <input type="range" {...inputProps}/>
                            </div>)
                    },
                )
            }
        </div>
    )
}