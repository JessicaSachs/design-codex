<template>
	<div class="cdx-docs-position-demo">
		<div class="cdx-docs-position-demo__inner" :style="style" />
	</div>
</template>

<script lang="ts">
// TODO maybe merge with PaddingDemo and SizeDemo
import { defineComponent, computed } from 'vue';

export default defineComponent( {
	name: 'CdxDocsPositionDemo',
	props: {
		/**
		 * The value of the token we're demoing, which should be a distance value
		 * (in px, em, %, etc)
		 */
		tokenValue: {
			type: String,
			required: true
		}
	},
	setup( props ) {
		const style = computed( () => ( {
			left: props.tokenValue
		} ) );

		return {
			style
		};
	}
} );
</script>

<style lang="less">
@import ( reference ) '@wikimedia/codex-design-tokens/dist/theme-wikimedia-ui.less';

.cdx-docs-position-demo {
	position: relative;
	box-sizing: content-box;
	width: 50px;
	height: 50px;
	margin-left: 50px;
	border: @border-base;

	@media screen and ( min-width: @min-width-breakpoint-tablet ) {
		width: 250px;
	}

	&__inner {
		background-color: fade( @background-color-primary, 75% );
		position: absolute;
		top: 12.5px;
		left: 12.5px;
		width: 25px;
		height: 25px;
		border: @border-base;
	}
}
</style>
