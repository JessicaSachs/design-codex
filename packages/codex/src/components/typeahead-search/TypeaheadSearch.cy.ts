/* eslint-disable no-undef */
import TypeaheadSearchWikipedia from './TypeaheadSearchWikipedia.vue';
import { mount } from '@cypress/vue';

const inputSelector = '[placeholder="Search Wikipedia"]';

beforeEach( () => {
	mount( TypeaheadSearchWikipedia );
} );

it( 'has an input that says Search Wikipedia', () => {
	cy.get( inputSelector ).should( 'be.visible' );
} );

it( 'shows the Search button when you click on the input', () => {
	cy.findByRole( 'button', { name: 'Search' } )
		.should( 'not.be.visible' )
		.get( inputSelector )
		.click()
		.get( 'body' )
		.findByRole( 'button', { name: 'Search' } )
		.should( 'be.visible' );
} );

it( 'fires a network request when typing with the queried values', () => {
//  Request URL: https://en.wikipedia.org/w/rest.php/v1/search/title?q=hello%20hkit&limit=10&
	cy.intercept( '*/search/title?*' ).as( 'searchSpy' );
	cy.get( inputSelector )
		.type( 'Hello Kitty' )
		.get( '@searchSpy' );
} );
