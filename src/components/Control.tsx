import React, {useContext} from 'react'
import {IControlMap} from '../types/ContorolTypes'
import styled from 'styled-components'
import {AppContext} from '../store'
import {setGravity, setImpulse, setLength, setWeight} from '../store/actionCreators'

const ControlSection = styled.div`
  background-color: rgba(95, 135, 120, 0.6);
  box-sizing: border-box;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ControlGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  width: 500px;
  margin-bottom: 20px;

  label {
    text-transform: uppercase;
    color: white;
  }

  input {
    width: 300px;
  }
`

export const Control: React.FC = () => {
    const {state: {length, impulse, gravity, weight}, dispatch} = useContext(AppContext)

    const settersMap: IControlMap = {
        length: {
            description: 'Длина подвеса',
            min: 10,
            max: 30,
            step: 0.1,
            value: length,
            set: (val) => dispatch(setLength(val)),
        },
        weight: {
            description: 'Вес груза',
            min: 20,
            max: 100,
            value: weight,
            set: (val) => dispatch(setWeight(val)),
        },
        gravity: {
            description: 'Сила притяжения',
            min: 1,
            max: 100,
            step: 0.1,
            value: gravity,
            set: (val) => dispatch(setGravity(val)),
        },
        impulse: {
            description: 'Начальный импульс',
            min: 1,
            max: 60,
            value: impulse,
            set: (val) => dispatch(setImpulse(val)),
        },
    }

    return (
        <ControlSection>
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
                            <ControlGroup key={key}>
                                <label htmlFor={key}>{description}: {option.value}</label>
                                <input type="range" {...inputProps}/>
                            </ControlGroup>)
                    },
                )
            }
        </ControlSection>
    )
}