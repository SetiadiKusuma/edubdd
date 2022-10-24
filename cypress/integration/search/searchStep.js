/// <reference types="cypress" />

import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import SearchPage from './searchPage';

Given('I open index page', () => {
    SearchPage.visit()
})

When('I submit some fitur in the search box', () => {
    SearchPage.searchSubmit()
})

Then('I see the results of what is written in the search box', () => {
    cy.get('h2').should('contain.text', 'Search Results:')

        cy.get('a[href="/online-banking.html"]')
            .should('have.length', 1)
            .and('have.text', 'Zero - Free Access to Online Banking')
        
        cy.get('a[href="/bank/online-statements.html"]')
            .should('have.length', 1)
            .and('have.text', 'Zero - Online Statements')
})