<template>
	<cdx-select
		v-model="selection"
		:menu-items="menuItems"
		default-label="Choose an option"
	/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { CdxSelect } from '@wikimedia/codex';
export default defineComponent( {
	name: 'BasicSelect',
	components: { CdxSelect },
	data() {
		return {
			menuItems: [
				{ label: 'Option A', value: 'a' },
				{ label: 'Option B', value: 'b' },
				{ value: 'c' },
				{ label: 'Option D', value: 'd', disabled: true }
			],
			selection: null
		};
	}
} );
</script>
