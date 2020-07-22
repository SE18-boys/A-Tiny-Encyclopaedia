import React from 'react'
import TestUtils from 'react-dom/test-utils'
import LoginForm from '../../src/components/LoginForm'
import { shallow,mount,configure,render  } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })

test('renders with text', () => {
    const wrapper = render(<LoginForm/>);
    expect(wrapper.find('.ant-form').length).toBe(1);
})


describe('DatePicker', () => {
    it('default value', () => {
        const wrapper = render(<LoginForm/>);
        const buttonObj=wrapper.find('.ant-form-item')

        console.info(`查找到ant-form-item的个数：${buttonObj.length}`)
    });
});
