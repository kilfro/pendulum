import React from 'react'
import {Control} from '../../src/components/Control'
import {shallow} from 'enzyme'

describe(Control, () => {
    test('should match snapshot', () => {
        const component = shallow(
            <Control
                weight="10"
                length="100"
                gravity="10"
                impulse="30"
            />
        )

        expect(component).toMatchSnapshot()
    })

    test('should call dispatch functions', () => {
        const setLengthMock = jest.fn()
        const setWeightMock = jest.fn()
        const setGravityMock = jest.fn()
        const setImpulseMock = jest.fn()

        const component = shallow(
            <Control
                weight="10"
                length="100"
                gravity="10"
                impulse="30"
                setThreadLength={setLengthMock}
                setWeight={setWeightMock}
                setGravity={setGravityMock}
                setInitialImpulse={setImpulseMock}
            />
        )

        component.find('input[name="length"]').simulate('change', {target: {value: '50'}})
        expect(setLengthMock).toHaveBeenCalledWith('50')

        component.find('input[name="weight"]').simulate('change', {target: {value: '45'}})
        expect(setWeightMock).toHaveBeenCalledWith('45')

        component.find('input[name="gravity"]').simulate('change', {target: {value: '5'}})
        expect(setGravityMock).toHaveBeenCalledWith('5')

        component.find('input[name="impulse"]').simulate('change', {target: {value: '10'}})
        expect(setImpulseMock).toHaveBeenCalledWith('10')
    })
})