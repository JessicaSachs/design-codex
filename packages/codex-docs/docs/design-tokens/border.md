<script setup>
import CdxDocsTokensTable from '../../src/components/tokens/TokensTable.vue';
import tokens from '@wikimedia/codex-design-tokens/dist/index.json';
</script>

# Border

## Width

<cdx-docs-tokens-table
	:tokens="tokens['border-width']"
	token-demo="CdxDocsBorderDemo"
	css-property="border-width"
/>

## Style

<cdx-docs-tokens-table
	:tokens="tokens['border-style']"
	token-demo="CdxDocsBorderDemo"
	css-property="border-style"
/>

## Color

<cdx-docs-tokens-table
	:tokens="tokens['border-color']"
	token-demo="CdxDocsBorderDemo"
	css-property="border-color"
/>

## Radius
<cdx-docs-tokens-table
	:tokens="tokens['border-radius']"
	token-demo="CdxDocsBorderDemo"
	css-property="border-radius"
/>
