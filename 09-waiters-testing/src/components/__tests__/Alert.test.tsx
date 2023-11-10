import React from "react";
import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";
import {Alert} from "../Alert";

const errorMessage = 'Error message';


function renderAlert({error}: any) {
    render(<Alert message={error}/>);
}

describe('<Alert/>', () => {
    it('should render error message with proper style', () => {
        renderAlert({error: errorMessage});

        const error = screen.getByText(errorMessage);

        expect(error).toBeInTheDocument();
        expect(error).toHaveStyle({color: 'red', fontStyle: 'bold'})
    });
});