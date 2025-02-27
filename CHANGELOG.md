# 0.1.0-alpha.5 / 2022-03-15
- Combobox: Remove superfluos `aria-disabled` attribute (Volker E)
- docs: Make tokens table copy button quiet again (Anne Tomasevich)
- icons: Skew 'italic-arab-keheh-jeem' and bolden 'bold-arab-dad' icons (Volker E)
- demo: Use ToggleSwitch for boolean props in controls (Anne Tomasevich)
- Lookup, tokens: Make Lookup component use Codex tokens (Volker E)
- tokens: Add `transition-property.base` and `.icon` (Volker E)
- Button, styles: Replace attribute with `:enabled`/`:disabled` pseudo classes (Volker E)
- Combobox: Replace menu styles with `options-menu` mixin (Volker E)
- tokens: Explain usage of `position.offset` tokens (Volker E)
- build: Add "npm run build-all" command, clean up other commands (Roan Kattouw)
- Select: Set `aria-multiselectable="false"` (Roan Kattouw)
- build: Explicitely set stylelint to modern support (Volker E)
- tokens: Add `color` and `border-color` for message components & validation (Volker E)
- Message, tokens: Make Message component use Codex tokens (Volker E)
- Select, tokens: Make Select component use Codex tokens (Volker E)
- Combobox, tokens: Make Combobox component use Codex tokens (Volker E)
- Checkbox, Radio: Unify enabled and disabled CSS logic and fix `:active` (Volker E)
- Button, tokens: Make Button component use Codex tokens (Volker E)
- Lookup: Simplify code (Roan Kattouw)
- useMenu: Remove inputValue feature, replace with updateSelectionOnHighlight (Roan Kattouw)
- useMenu: Remove footerCallback feature (Roan Kattouw)
- tokens: Add `margin-top.options-menu` for Options menu (Volker E)
- TypeaheadSearch: Simplify input change handling (Anne Tomasevich)
- docs: Restructure and provide more details on SVG optimization (Volker E)
- docs: Standardize on cdx-docs prefix (Anne Tomasevich)
- docs: Normalize component demo formatting and language (Anne Tomasevich)
- build: Require all CSS classes to start with `cdx-` (Roan Kattouw)
- docs: Use kebab-case for component names in *.md files (Roan Kattouw)
- docs: Add import statement to imported code snippet example (Roan Kattouw)
- build: Update Stylelint packages to latest (Volker E)
- Button, styles: Remove Button `:focus` outline reset (Volker E)
- TextInput, tokens: Use `transition-property-base` (Volker E)
- TextInput, styles: Replace attribute with `:enabled`/`:disabled` pseudo classes (Volker E)
- docs: Rename <Wrapper> to <cdx-demo-wrapper> (Roan Kattouw)
- tokens: Add binary components specific tokens (Volker E)
- tokens: Remove `border-radius-rounder` (Volker E)
- ToggleSwitch, styles: Unify disabled and enabled CSS logic (Volker E)
- tokens: Add `border-binary-input` shorthand (Volker E)
- styles: Fix `transform` value on center aligned menu item (Volker E)
- ListTile, ListTileLabel, tokens: Make ListTile components use Codex tokens (Volker E)
- build: Update 'style-dictionary' to latest (Volker E)
- Checkbox, Radio, tokens: Make binary input components use Codex tokens (Volker E)
- docs: Replace WikimediaUI Base with Codex design tokens reference (Volker E)
- tokens: Add `cursor` property tokens (Volker E)
- ToggleSwitch, tokens: Make toggle switch component use Codex tokens (Volker E)
- styles, tokens: Replace SFC `cursor` tokens with Codex design tokens (Volker E)
- docs: Overwrite VitePress theme default html, body font size to `initial` (Volker E)
- docs: Improve generated events and methods docs (Anne Tomasevich)
- Replace useMenu composable with Menu component (Roan Kattouw)
- styles: Fix fixed transform on Combobox use of 'menu-icon.less' (Volker E)
- docs, Controls.vue: remove unneeded uses of <template> wrappers (DannyS712)
- build, tokens: Add deprecation functionality to tokens (Volker E)
- MenuItem: Change Option to MenuItem (Anne Tomasevich)
- build: Enable eslint in hidden directories (Roan Kattouw)
- build, tokens: Make style-dictionary config.js config-only (Roan Kattouw)
- docs: Use Special:MyLanguage for Code of Conduct link (DannyS712)
- ToggleButton: add ToggleButton component (DannyS712)
- docs: Change "a Code of Conduct" to "the Code of Conduct" (Roan Kattouw)
- Menu: Fix selectedValue documentation rendering (Roan Kattouw)
- MenuItem: Merge in ListTile and reflect updated designs (Anne Tomasevich)
- docs: Improve demos of components that use menus (Anne Tomasevich)
- docs: Set dir="ltr" on all non-component docs pages (Roan Kattouw)
- ToggleSwitch: Remove unused margin-left transition (Roan Kattouw)
- Add button styles mixin to avoid style duplication (DannyS712)
- docs, ToggleButton: remove unneeded `ref` import from markdown page (DannyS712)
- tokens: Convert remaining deprecated tokens to new style (Roan Kattouw)
- tokens: Move `color-primary` from base to components (Volker E)
- binary inputs: Remove `aria-disabled` overtaken by input's `disabled` (Volker E)
- tokens: Add `margin-offset-border-width-base` and remove menu component token (Volker E)
- styles: Remove element selectors (Volker E)
- Menu, MenuItem: Add menuConfig, enable boldLabel & hideDescriptionOverflow (Anne Tomasevich)
- SearchInput: Add the SearchInput component (Anne Tomasevich)
- TypeaheadSearch, tokens: Make typeahead search component use Codex tokens (Volker E)
- Removing remaining references to 'WikimediaUI Base' and uninstall (Volker E)
- binary-input: Remove use of `[ class$='...' ]` selector (Roan Kattouw)
- docs: Normalize to writing “Less” (Volker E)
- styles: Use common file for non-component specific mixins (Volker E)
- docs, Wrapper: add a "reset" button (DannyS712)
- docs, Wrapper: add a "copy" button for code samples (DannyS712)

# v0.1.0-alpha.4 / 2022-02-18
- docs: Set CODEX_DOC_ROOT default to '/' not '' (James D. Forrester)
- build: Add 'branch-deploy' npm script, for WMF CI to call (Roan Kattouw)
- docs: Explain that icons are monochrome, add SVG conventions (Roan Kattouw)
- docs: Make CODEX_DOC_ROOT default to / instead of /codex/main (Roan Kattouw)
- docs: Make Vitepress base URL configurable as an environment variable (Roan Kattouw)
- build: Bump .nvmrc to 16.9.1 (Roan Kattouw)
- tokens: Fix `background-color-framed--hover` to set to `#fff` (Volker E)
- tokens: Update input padding token to match WMUI value (Anne Tomasevich)
- build, icons: Rename LICENSE-MIT to LICENSE (Roan Kattouw)
- docs: Explicitly set dir="ltr" on direction switcher (Roan Kattouw)

# v0.1.0-alpha.3 / 2022-02-17
- TextInput, tokens: Make TextInput component use Codex tokens (Volker E)
- build: Change icons CJS build to UMD (Roan Kattouw)
- build, styles: Add further properties to 'stylelint-order' & align code (Volker E)
- build: Update package-lock.json (Roan Kattouw)
- ToggleSwitch: Add ToggleSwitch component (Anne Tomasevich)
- tokens: Add 'input' and 'input-binary' component 'border-color' tokens (Volker E)
- TypeaheadSearch: Add `auto-expand-width` prop (Nicholas Ray)
- TypeaheadSearch: Add initial iteration of TypeaheadSearch (Anne Tomasevich)
- build: Enable safeBothPrefix for postcss-rtlcss (Roan Kattouw)
- build: Change browserslistrc to `modern-es6-only` (Lucas Werkmeister)
- build: Turn on 'lint:eslint' for JSON configuration files (Volker E)
- build: Remove trailing whitespace from Codex's README.md (Roan Kattouw)
- build: Update 'package-lock.json' (Lucas Werkmeister)
- icons: Set to MIT license (Volker E)
- tokens: Fix `background-color-base--disabled` value (Volker E)
- tokens: Add 'size-indicator' (Volker E)

# v0.1.0-alpha.2 / 2022-02-14
- build: Un-pin postcss, update to 8.4.6 (Roan Kattouw)
- build: Add LICENSE files to each package (Roan Kattouw)
- build: Copy SVGs to dist/images at the right time (Roan Kattouw)
- docs: Add a README.md file for the Codex package (Roan Kattouw)

# v0.1.0-alpha.1 / 2022-02-14
- Initial release
