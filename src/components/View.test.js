import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import View from './View';

const testArticlesArr = [
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
];

const testArticle2 = [];



test("renders zero articles without errors", async () => {
    render(<Router><View articles={testArticle2}/></Router>)
});

test("renders three articles without errors", async ()=> {
    render(<Router><View articles={testArticlesArr}/></Router>)

    expect(articles).toHaveLength(3);
});

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.