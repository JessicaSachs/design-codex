<script setup>
import CdxDocsTokensTable from '../../src/components/tokens/TokensTable.vue';
import tokens from '@wikimedia/codex-design-tokens/dist/index.json';
</script>

# Box shadow

<cdx-docs-tokens-table
	:tokens="tokens['box-shadow']"
	token-demo="CdxDocsBoxShadowDemo"
	css-property="box-shadow"
/>
