import React from 'react'
import TestUtils from 'react-dom/test-utils'
import SignUpView from '../../src/view/SignUpView'
import { shallow,mount,configure,render  } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from "react-router-dom";
configure({ adapter: new Adapter() })

test('check footer', () => {
    const wrapper = render(<BrowserRouter><SignUpView/></BrowserRouter>);
    expect(wrapper.find('.ant-layout-footer').text()).toBe("copyright@2020 SE18boys");
})


describe('check footer number', () => {
    it('default value', () => {
        const wrapper = render(<BrowserRouter><SignUpView/></BrowserRouter>);
        const buttonObj=wrapper.find('.ant-layout-footer')

        console.info(`查找到footer的个数：${buttonObj.length}`)
        console.info(`查找到footer的内容：${buttonObj.text()}`)

        // buttonObj.text(),spanObj.text()
        //expect(wrapper.find('.ant-calendar-picker-input').getDOMNode().value).toBe('2015');
    });
});

describe('check footer number', () => {
    it('default value', () => {
        const wrapper = render(<BrowserRouter><SignUpView/></BrowserRouter>);
        const Obj=wrapper.find('.ant-layout-footer')

        console.info(`查找到footer的个数：${Obj.length}`)
        console.info(`查找到footer的内容：${Obj.text()}`)

        // buttonObj.text(),spanObj.text()
        //expect(wrapper.find('.ant-calendar-picker-input').getDOMNode().value).toBe('2015');
    });
});

describe('LoginForm or RegisterForm', () => {
    it('first load and should be login', () => {

        const wrapper = render(<BrowserRouter><SignUpView /></BrowserRouter>);
        const Obj=wrapper.find('.ant-form-item')

        console.info(`查找到.ant-form-item的个数：${Obj.length}`);
        expect(wrapper.find('.ant-form-item').length).toBe(4);
    });

    it('click to switch to register', () => {

        const wrapper = render(<BrowserRouter><SignUpView /></BrowserRouter>);
        const link=wrapper.find('a');
        console.info(`查找到a的个数：${link.length}`);
        console.info(link.text());
        // link.simulate('click'); // nothing happens
        // expect(wrapper.find('.ant-form-item').length).toBe(5);
    });
});
