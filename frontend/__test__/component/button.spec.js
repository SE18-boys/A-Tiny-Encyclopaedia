import React from 'react'
import TestUtils from 'react-dom/test-utils'
import Button from '../../src/function/button'

import ShallowRenderer from 'react-test-renderer/shallow'

test('renders with text', () => {
    const text = 'text'
    const renderer = new ShallowRenderer()
    renderer.render(<Button text={text} />)
    const button = renderer.getRenderOutput()

    expect(button.type).toBe('button')
    expect(button.props.children).toBe(text)
})

test('works', () => {
    expect(true).toBe(true)
})
