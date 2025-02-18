# Contributing to MRW Post Cleanup Utilities

The whole point of publishing this plugin is for people to use it and contribute back. I've specifically worked to make contributing a new cleanup utility easy, and I welcome all input and suggestions!

## Contributing a bug report

1. Always search existing issues to see if the bug has already been reported.
2. Provide as much detail as you can including clear steps to reproduce the issue and a detailed description of the expected outcome and the actual outcome.

## Contributing a Pull Request

1. Respond to an existing issue or open a new one to say what work you intend to do and discuss any important details
2. Confirm interest in potentially merging your work
3. Submit a pull request with your changes!

## Getting started with development

This plugin uses the `@wordpress/scripts` package to compile the JavaScript. To get started:

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm run start` to compile changes

## Anatomy of a cleanup utility

If you plan to submit a new cleanup utility, here's what you should know!

1. Each cleanup utility needs a button that applies the cleanup process to the post content. Each button/utility has its own file in the `src/js/buttons` folder.
2. There are two types of cleanup button, each with a component to make it easy to apply:
    - "Find & Replace" utilities use the `<EditorFindReplaceButton />` component. That button takes three props: `label`, `icon`, and `contentTransform`. The function passed to `contentTransform` should except a string (the post's block markup as a string) and return a modified string. For an example, see `src/js/buttons/strip-underlines.js`.
    - "Block Transform" utilities use the `<BlockTransformButton />` component. That button takes four props: `label`, `icon`, `blockTest` and `blockTransform`. The `blockTest` function should accept a block object and return `true` (this block should be modified) or `false` (do nothing). The function passed to `blockTransform` should except a block object and return a modified block object. For an example, see `src/js/buttons/reset-heading-levels.js`.
3. Once a new cleanup utility button is defined, it needs a new section added to `src/js/sidebar-plugin.js`. Each utility goes in its own section via the `<SidebarPanelSection />` component. Sections may only need the button, or they may need additional non-persistent settings that inform the utility (e.g. heading level to transform a block to).

## Plugin component architecture

Taken together, you can think of the architecture of this plugin as:

```jsx
/* The sidebar containing all cleanup utilities */
<PluginSidebar>
    /* A section for each cleanup utility */
    <SidebarPanelSection>
        /* Optional settings that apply to the utility */

        /* The button that applies the cleanup utility: */
        <EditorFindReplaceButton /> /* - OR - */ <BlockTransformButton />
    </SidebarPanelSection>
</PluginSidebar>
```
