import React from 'react'
import TestUtils from 'react-dom/test-utils'
import RegisterForm from '../../src/components/RegisterForm'
import { shallow,mount,configure,render  } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import {Router} from "react-router";
import { BrowserRouter } from "react-router-dom";

configure({ adapter: new Adapter() })

test('renders with text', () => {
    const wrapper = render(<BrowserRouter><RegisterForm /></BrowserRouter>);
    expect(wrapper.find('.ant-form').length).toBe(1);
})


describe('check items', () => {
    it('default value', () => {

        const wrapper = render(<BrowserRouter><RegisterForm /></BrowserRouter>);
        const buttonObj=wrapper.find('.ant-form-item')

        console.info(`查找到ant-form-item的个数：${buttonObj.length}`)
    });
});
