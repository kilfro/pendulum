import React, {useEffect, useState} from 'react'
import {useTypedSelector} from '../hooks/useTypedSelector'
import styled from 'styled-components'
import {BallProps, ThreadProps} from '../types/PendulumTypes'

const PendulumSection = styled.div`
  margin: 0 auto;
`

const Thread = styled.div<ThreadProps>`
  position: relative;
  border: 1px solid steelblue;
  transform-origin: top;
  height: ${props => props.length + 'cm'};
  transform: ${props => 'rotate(' + props.angel + 'deg)'};
`

const Ball = styled.div<BallProps>`
  position: absolute;
  background-color: rgba(75, 0, 130, 0.96);
  border-radius: 50%;
  bottom: ${props => -props.weight + 'px'};
  left: ${props => +props.weight * -0.5 + 'px'};
  width: ${props => props.weight + 'px'};
  height: ${props => props.weight + 'px'};
`

export const Pendulum: React.FC = () => {
    const timeout = 5

    const [time, setTime] = useState<number>(0)
    const [angel, setAngel] = useState<number>(0)
    const {weight, impulse, gravity, length} = useTypedSelector(state => state)

    const calculateCurrentAngel = (timeInSeconds: number): number => {
        return +impulse * Math.sin(Math.sqrt(+gravity / (+length / 100)) * timeInSeconds)
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setAngel(calculateCurrentAngel(time / 1000))
            setTime(prev => prev + timeout)
        }, timeout)

        return () => clearInterval(intervalId)
    }, [time])

    return (
        <PendulumSection>
            <Thread length={length} angel={angel}>
                <Ball weight={weight}/>
            </Thread>
        </PendulumSection>
    )
}