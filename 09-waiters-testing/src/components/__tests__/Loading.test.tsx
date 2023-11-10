import React from "react";
import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";
import {Loading} from "../Loading";

const loadingText = 'Loading...';

function renderLoading() {
    render(<Loading/>);
}

describe('<Loading/>', () => {
    it('should render loading message with proper style', () => {
        renderLoading();

        const loading = screen.getByText(loadingText);

        expect(loading).toBeInTheDocument();
        expect(loading).toHaveStyle({fontStyle: 'italic'})
    });
});