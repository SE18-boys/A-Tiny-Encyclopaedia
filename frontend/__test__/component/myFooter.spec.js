import React from 'react'
import TestUtils from 'react-dom/test-utils'
import MyFooter from '../../src/components/MyFooter'
import { shallow,mount,configure  } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })

test('renders with text', () => {
    const wrapper = mount(<MyFooter/>);
    expect(wrapper.find('.ant-layout-footer').text()).toBe("copyright@2020 SE18boys");
})


describe('DatePicker', () => {
    it('default value', () => {
        const wrapper = mount(<MyFooter/>);
        const buttonObj=wrapper.find('.ant-layout-footer')

        console.info(`查找到footer的个数：${buttonObj.length}`)
        console.info(`查找到footer的内容：${buttonObj.text()}`)

        // buttonObj.text(),spanObj.text()
        //expect(wrapper.find('.ant-calendar-picker-input').getDOMNode().value).toBe('2015');
    });
});
