import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";


import View from './View';
import axiosWithAuth from '../utils/axiosWithAuth';

jest.mock('../utils/axiosWithAuth');


test("renders zero articles without errors", async () => {
    render(<Router><View /></Router>)
    axiosWithAuth.mockResolvedValueOnce({
        data: []
    })
});

test("renders three articles without errors", async ()=> {
    render(<Router><View /></Router>)
    axiosWithAuth.mockResolvedValueOnce({
        data: [
            {
                headline: 'teadfasdfst',
                author: 'asdfasdfasdf',
                summary: 'this is the summary',
                body: 'this is the body',
                id: '23424efasd',
                createOn: '2021-10-14T13:16:44-05:00'
            },
            {
                headline: 'teadfasdfst',
                author: 'asdfasdfasdf',
                summary: 'this is the summary',
                body: 'this is the body',
                id: '23424efasd',
                createOn: '2021-10-14T13:16:44-05:00'
            },
            {
                headline: 'teadfasdfst',
                author: 'asdfasdfasdf',
                summary: 'this is the summary',
                body: 'this is the body',
                id: '23424efasd',
                createOn: '2021-10-14T13:16:44-05:00'
            }
        ]
    });

    
});

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.