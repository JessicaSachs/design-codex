<template>
	<div>
		<p class="cdx-docs-demo-text">
			Checkbox value: {{ checkboxValue }}
		</p>

		<cdx-checkbox v-model="checkboxValue" @update:model-value="onUpdate">
			Checked if true
		</cdx-checkbox>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { CdxCheckbox } from '@wikimedia/codex';

export default defineComponent( {
	name: 'SingleCheckbox',
	components: { CdxCheckbox },
	setup() {
		const checkboxValue = ref( false );

		const onUpdate = ( value: string ): void => {
			// eslint-disable-next-line no-console
			console.log( 'update:modelValue event: ' + value );
		};

		return {
			checkboxValue,
			onUpdate
		};
	}
} );
</script>
