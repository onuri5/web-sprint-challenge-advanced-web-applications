import React from 'react';
import { render, screen, waitFor, within } from '@testing-library/react'

import { BrowserRouter as Router, Route} from "react-router-dom";


import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';
import App from './App';

const testArticle = {
    headline: 'teadfasdfst',
    author: 'asdfasdfasdf',
    summary: 'this is the summary',
    body: 'this is the body',
    id: '23424efasd',
    createOn: '2021-10-14T13:16:44-05:00'
}

const testArticle2 = {
    headline: 'teadfasdfst',
    author: '',
    summary: 'this is the summary',
    body: 'this is the body',
    id: '23424efasd',
    createOn: '2021-10-14T13:16:44-05:00'
}
  
  const cred = {
    username: "Lambda",
    password: "School"
  }

test("Renders Login and routes to View", async ()=>{
    render(<Router><App/></Router>);
    const nameInput = document.querySelector("#username");
    const passwordInput = document.querySelector("#password");
  
    userEvent.type(nameInput, cred.username);
    let wait = await screen.findAllByRole("button");

    userEvent.clear(passwordInput);
    userEvent.type(passwordInput, cred.password);
    wait = await screen.findAllByRole("button");

    const button = document.querySelector("#submit");
    userEvent.click(button);

    const title = screen.getByText('Blogger Pro');
    expect(title).toBeInTheDocument;
  });  

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Router><Article article={testArticle}/></Router>)
    const headline = screen.getByTestId('headline');
    const author = screen.getByTestId('author');

    expect(headline).toBeInTheDocument
    expect(author).toBeInTheDocument
});

test('renders "Associated Press" when no author is given', ()=> {
    render(<Router><Article article={testArticle2}/></Router>)

    const author = screen.getByTestId('author');

    expect(author).toBeFalsy;
    expect('Associated Press').toBeInTheDocument;
});

test('executes handleDelete when the delete button is pressed', ()=> {
    const handleDeleteMock = jest.fn();
    render(<Router><Article article={testArticle2} handleDelete={handleDeleteMock}/></Router>)
    
    const button = screen.getByTestId('deleteButton');
    userEvent.click(button);

    expect(handleDeleteMock.mock.calls.length === 1).toBeTruthy();
});

//Task List:
//1. Complete all above tests. Create test article data when needed.