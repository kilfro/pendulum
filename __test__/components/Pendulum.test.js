import React from 'react'
import {Pendulum} from '../../src/components/Pendulum'
import {shallow} from 'enzyme'

describe(Pendulum, () => {
    test('should change thread length', () => {
        const component = shallow(
            <Pendulum length="200"/>
        )

        expect(component.find('.thread').get(0).props.style.height).toBe('200cm')

        component.setProps({length: 300})
        expect(component.find('.thread').get(0).props.style.height).toBe('300cm')
    })

    test('should change ball weight', () => {
        const component = shallow(
            <Pendulum weight="50"/>
        )

        expect(component.find('.ball').get(0).props.style.width).toBe('50px')

        component.setProps({weight: 30})
        expect(component.find('.ball').get(0).props.style.width).toBe('30px')
    })
})