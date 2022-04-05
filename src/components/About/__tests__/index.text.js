import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';
const { asFragment } = render(<About></About>);
afterEach(cleanup)
describe('About component', () => {
    it('renders', () => {
        render(<About></About>)
    });
    it('matches snapshot Dom node structure', () => {
        expect(asFragment()).toMatchSnapshot();
    })
})