import React from 'react'
import {IControlMap} from '../types/ContorolTypes'
import {useTypedSelector} from '../hooks/useTypedSelector'
import {useActions} from '../hooks/useActions'
import styled from 'styled-components'

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