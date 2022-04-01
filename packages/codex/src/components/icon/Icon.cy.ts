import { mount } from '@cypress/vue';
import { cdxIconAlert, Icon } from '@wikimedia/codex-icons';
import CdxIcon from './Icon.vue';
import { HTMLDirection } from '../../types';

const examplePathIcon = { path: 'M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z' };
const exampleSvgIcon = '<path d="M3 3H1v16h18v-2H3z"/><path d="M11 11L8 9l-4 4v3h14V5z"/>';
const exampleFlipIcon = {
	ltr: examplePathIcon,
	shouldFlip: true as const,
	shouldFlipExceptions: [ 'he', 'yi' ]
};

describe( 'renders the SVG', () => {
	type Case = [
		msg: string,
		props: { icon: Icon, iconLabel?: string, dir?: HTMLDirection|null, lang?: string|null }
	];

	const cases: Case[] = [
		[ 'Simple path icon', { icon: examplePathIcon } ],
		[ 'Simple SVG icon', { icon: exampleSvgIcon } ],
		[ 'Alert icon', { icon: cdxIconAlert } ],
		[ 'Icon with title', { icon: exampleSvgIcon, iconLabel: 'Foo' } ],
		[ 'Flippable icon (LTR)', { icon: exampleFlipIcon, dir: 'ltr' } ],
		[ 'Flippable icon (RTL)', { icon: exampleFlipIcon, dir: 'rtl' } ],
		[ 'Flippable icon (RTL, non-exception language)', { icon: exampleFlipIcon, dir: 'rtl', lang: 'ar' } ],
		[ 'Flippable icon (RTL, exception language)', { icon: exampleFlipIcon, dir: 'rtl', lang: 'he' } ]
	];

	cases.forEach( ( [ title, props ], i ) => {
		it( `Case ${i} ${title} ${[ props.iconLabel, props.lang, props.dir ].filter( ( c ) => c ).join( ', ' )}`, () => {

			// I would run a visual regression snapshot here with percy
			// unless there are specific A11y props you need to make sure exist.
			// See an example here: https://percy.io/cypress-io/cypress/builds/16274041/search/preview/916464272?browser=chrome&searchParam=icon&viewLayout=side-by-side&viewMode=new&width=1280
			mount( CdxIcon, { props } );
		} );
	} );
} );
