<template>
	<div>
		<cdx-lookup
			v-model="selection"
			:menu-items="menuItems"
			@new-input="onInput"
		>
			<template #no-results>
				No results found.
			</template>
		</cdx-lookup>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { CdxLookup, MenuItemData } from '@wikimedia/codex';
import vegetableItems from './data';

export default defineComponent( {
	name: 'LookupNoResults',
	components: { CdxLookup },
	setup() {
		const selection = ref( '' );
		const menuItems = ref<MenuItemData[]>( [] );

		function onInput( value: string ) {
			if ( value ) {
				menuItems.value = vegetableItems.filter( ( item ) =>
					item.label.includes( value )
				);
			}
		}

		return {
			selection,
			menuItems,
			onInput
		};
	}
} );
</script>
