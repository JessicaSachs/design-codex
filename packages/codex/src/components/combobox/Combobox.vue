<template>
	<div
		class="cdx-combobox"
		:class="rootClasses"
		:style="rootStyle"
	>
		<div class="cdx-combobox__input-wrapper">
			<cdx-text-input
				ref="input"
				v-model="modelWrapper"
				v-bind="otherAttrs"
				class="cdx-combobox__input"
				:aria-activedescendant="highlightedId"
				:aria-expanded="expanded"
				:aria-owns="menuId"
				:disabled="disabled"
				aria-autocomplete="list"
				autocomplete="off"
				role="combobox"
				tabindex="0"
				@keydown="onKeydown"
				@focus="onInputFocus"
				@blur="onInputBlur"
			/>

			<cdx-button
				class="cdx-combobox__expand-button"
				:disabled="disabled"
				tabindex="-1"
				@mousedown="onButtonMousedown"
				@click="onButtonClick"
			>
				<cdx-icon
					class="cdx-combobox__expand-icon"
					:icon="cdxIconExpand"
				/>
			</cdx-button>
		</div>

		<cdx-menu
			:id="menuId"
			ref="menu"
			v-model:selected="modelWrapper"
			v-model:expanded="expanded"
			:menu-items="menuItems"
			v-bind="menuConfig"
		>
			<template #default="{ menuItem }">
				<!--
					@slot Display of an individual item in the menu
					@binding {MenuItemData} menuItem The current menu item
				-->
				<slot name="menu-item" :menuItem="menuItem" />
			</template>

			<template #no-results>
				<!--
					@slot Message to show if there are no menu items to display.
				-->
				<slot name="no-results" />
			</template>
		</cdx-menu>
	</div>
</template>

<script lang="ts">
import {
	PropType,
	computed,
	defineComponent,
	ref,
	toRef,
	watch
} from 'vue';
import { cdxIconExpand } from '@wikimedia/codex-icons';

import CdxButton from '../button/Button.vue';
import CdxIcon from '../icon/Icon.vue';
import CdxMenu from '../menu/Menu.vue';
import CdxTextInput from '../text-input/TextInput.vue';

import useModelWrapper from '../../composables/useModelWrapper';
import useGeneratedId from '../../composables/useGeneratedId';
import useSplitAttributes from '../../composables/useSplitAttributes';

import { MenuItemData, MenuConfig } from '../../types';

/**
 * Text input with an adjoining button and an expandable menu of items.
 */
export default defineComponent( {
	name: 'CdxCombobox',
	components: {
		CdxButton,
		CdxIcon,
		CdxMenu,
		CdxTextInput
	},

	/**
	 * Attributes applied to this component by a parent will be applied
	 * to the TextInput child component rather than the root element.
	 */
	inheritAttrs: false,

	props: {
		/**
		 * Menu items. See the MenuItemData type.
		 */
		menuItems: {
			type: Array as PropType<MenuItemData[]>,
			required: true
		},

		/**
		 * Value of the current selection.
		 *
		 * Provided by `v-model` binding in the parent component.
		 */
		modelValue: {
			type: [ String, Number ] as PropType<string|number>,
			default: ''
		},

		/**
		 * Whether the dropdown is disabled.
		 */
		disabled: {
			type: Boolean,
			default: false
		},

		/**
		 * Configuration for various menu features. All properties default to false.
		 *
		 * See the MenuConfig type.
		 */
		menuConfig: {
			type: Object as PropType<MenuConfig>,
			default: () => {
				return {} as MenuConfig;
			}
		}
	},

	emits: [
		/**
		 * When the selection value changes.
		 *
		 * @property {string | number} modelValue The new model value
		 */
		'update:modelValue'
	],

	setup( props, context ) {
		const input = ref<InstanceType<typeof CdxTextInput>>();
		const menu = ref<InstanceType<typeof CdxMenu>>();
		const menuId = useGeneratedId( 'combobox' );
		const modelWrapper = useModelWrapper( toRef( props, 'modelValue' ), context.emit );
		const expanded = ref( false );
		const expanderClicked = ref( false );

		const highlightedId = computed( () => menu.value?.getHighlightedMenuItem()?.id );

		const internalClasses = computed( () => {
			return {
				'cdx-combobox--disabled': props.disabled
			};
		} );

		// Get helpers from useSplitAttributes.
		const {
			rootClasses,
			rootStyle,
			otherAttrs
		} = useSplitAttributes( context.attrs, internalClasses );

		/**
		 * When the input gains focus, update the state of the menu.
		 * If the menu is collapsed, expand the menu (if there is anything to
		 * display). If the menu was already expanded and the expander was just
		 * clicked, collapse the menu instead.
		 */
		function onInputFocus(): void {
			if ( expanderClicked.value && expanded.value ) {
				expanded.value = false;
			} else if ( props.menuItems.length > 0 || context.slots[ 'no-results' ] ) {
				expanded.value = true;
			}
		}

		/**
		 * When the input loses focus, update the state of the menu.
		 * If the menu was expanded and the expander was just clicked,
		 * keep the menu open. Otherwise, close the menu.
		 */
		function onInputBlur(): void {
			if ( expanderClicked.value && expanded.value ) {
				expanded.value = true;
			} else {
				expanded.value = false;
			}
		}

		/**
		 * Set a flag variable *before* the text input loses focus so that
		 * we can correctly determine whether focus changes are due to the
		 * expander button being clicked.
		 */
		function onButtonMousedown(): void {
			if ( props.disabled ) {
				return;
			}
			expanderClicked.value = true;
		}

		/**
		 * When clicked, the button will briefly receive focus itself (this is
		 * necessary for correct UX), but then the TextInput is focused
		 * programmatically.
		 */
		function onButtonClick(): void {
			if ( props.disabled ) {
				return;
			}
			input.value?.focus(); // call the public focus() method on TextInput
		}

		function onKeydown( e: KeyboardEvent ) {
			if (
				!menu.value ||
				props.disabled ||
				props.menuItems.length === 0 ||
				( e.key === ' ' && expanded.value )
			) {
				return;
			}
			menu.value.delegateKeyNavigation( e );
		}

		/**
		 * No matter what, the flag needs to be reset every time the menu
		 * visibility state changes.
		 */
		watch( expanded, () => {
			expanderClicked.value = false;
		} );

		return {
			input,
			menu,
			menuId,
			modelWrapper,
			expanded,
			highlightedId,
			onInputFocus,
			onInputBlur,
			onKeydown,
			onButtonClick,
			onButtonMousedown,
			cdxIconExpand,
			rootClasses,
			rootStyle,
			otherAttrs
		};
	}
} );

</script>

<style lang="less">
@import ( reference ) '@wikimedia/codex-design-tokens/dist/theme-wikimedia-ui.less';
@import './../../themes/mixins/menu-icon.less';

@min-width-combobox: 280px;
@min-width-combobox-expand-button: 36px;

.cdx-combobox {
	display: inline-block;
	position: relative;
	min-width: @min-width-combobox;

	&__input-wrapper {
		display: flex;
	}

	&__input {
		flex: 1 1 auto;

		input {
			border-right-width: 0;
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	&__expand-button {
		position: relative;
		min-width: @min-width-combobox-expand-button;
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}

	&__expand-icon {
		.cdx-mixin-menu-icon( center, @size-indicator );
	}
}
</style>
