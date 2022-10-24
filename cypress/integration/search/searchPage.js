const URL = 'http://zero.webappsecurity.com/index.html'
const SEARCH = '#searchTerm'

class SearchPage{
    static visit() {
        cy.visit(URL)
    }

    static searchSubmit() {
        cy.get(SEARCH).type('online {enter}')
    }
}

export default SearchPage