<template>
	<div>
		<cdx-combobox
			v-model="selection"
			:menu-items="menuItems"
			:menu-config="menuConfig"
			placeholder="Type or choose an option"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { CdxCombobox, MenuItemData } from '@wikimedia/codex';
import { cdxIconCamera, cdxIconBook, cdxIconClock } from '@wikimedia/codex-icons';

const menuItems: MenuItemData[] = [
	{
		value: 'camera',
		description: 'optical device for recording or transmitting photographic images or videos',
		icon: cdxIconCamera
	},
	{
		value: 'book',
		description: 'written text that can be published in printed or electronic form',
		icon: cdxIconBook
	},
	{
		value: 'clock',
		description: 'instrument that measures the passage of time',
		icon: cdxIconClock
	}
];

export default defineComponent( {
	name: 'ComboboxComplexMenuItems',
	components: { CdxCombobox },

	data() {
		return {
			menuItems,
			selection: '',
			menuConfig: {
				boldLabel: true,
				hideDescriptionOverflow: true
			}
		};
	}
} );
</script>
