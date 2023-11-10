import React from "react";
import {act, render, screen, waitForElementToBeRemoved} from "../../../utils/test-utils";
import userEvent from '@testing-library/user-event'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {URL} from "../api/server";
import {WaitersApp} from "../index";

const HEADER_COUNT = 1;
const mockedWaiters = [
    {
        "id": 1,
        "firstName": "John",
        "phone": "123-5423-453"
    },
    {
        "id": 2,
        "firstName": "Lucy",
        "phone": "654-223-555"
    },
    {
        "id": 5,
        "firstName": "Zack",
        "phone": "8753489233"
    },
]

export const handlers = [
    rest.get(URL, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(mockedWaiters),
        )
    }),
]

const server = setupServer(...handlers)

describe('<WaitersApp/>', () => {
    // Enable API mocking before tests.
    beforeAll(() => server.listen())

    // Disable API mocking after the tests are done.
    afterAll(() => server.close())

    // Reset any runtime request handlers we may add during the tests.
    afterEach(() => server.resetHandlers())

    it('should render table with rows', async () => {
        render(<WaitersApp/>);

        await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));

        const rows = screen.getAllByRole('row');

        expect(rows).toHaveLength(3 + HEADER_COUNT);
    });

    it('should filter elements when "A-M" button is clicked', async () => {
        render(<WaitersApp/>);
        await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));

        const activeBtn = screen.getByRole('button', {name: /A-M/i});

        await act(async () => {
            await userEvent.click(activeBtn);
        });

        const rows = screen.getAllByRole('row');

        expect(rows).toHaveLength(2 + HEADER_COUNT);
    });
});