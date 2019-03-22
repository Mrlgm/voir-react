import * as renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../icon'
import {mount} from 'enzyme'

describe('icon', () => {
    it('render success', () => {
        const json = renderer.create(<Icon name="wangwang"/>).toJSON()
        expect(json).toMatchSnapshot()
    })

    it('onClick ', () => {
        const fn = jest.fn()
        const component = mount(<Icon name="wangwang" onClick={fn}/>)
        component.find('svg').simulate('click')
        expect(fn).toBeCalled()
    });
})