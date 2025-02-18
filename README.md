# MRW Post Cleanup Utilities

v0.3.0

Mark Root-Wiley, [MRW Web Design](https://MRWweb.com)

A WordPress plugin with useful tools to transform blocks and post content for more accessible and consistent formatting.

![The Post Cleanup Utilities sidebar is visible in the WordPress post editor, showing features such as Fix Fake Headings and Strip Underlines](https://github.com/mrwweb/mrw-post-cleanup-utilities/blob/main/assets/cleanup-utilities-screenshot.png?raw=true)

> [!TIP]
> I put a lot of unpaid work into a plugin like this. I publish it for free in hopes that it helps people save time and make better websites. **If this plugin saved you time on a paid project**, please consider [sponsoring my work on the project](https://github.com/sponsors/mrwweb) or sponsoring work on a specific feature that would help you.

## Features

- Detect fake headings and convert to real heading blocks at a selected level
- Set all heading blocks to one level
- Promote all heading blocks "up" a level in the hiearchy (e.g. H3 to H2)
- Strip all underline styles from the post
- Remove all "hard" linebreaks (the `<br>` tag)
- Replace all non-breaking spaces (`&nbsp;`) with regular spaces

## Changelog

### 0.3.0 (18 Feb, 2025)

- Major refactor to componentize the transform buttons and sidebar sections for easier maintenance and contribution
- Add "Strip Underlines" button (#1)
- Add "Remove Linebreaks" button (#3)
- Add "Remove Non-breaking Spaces" button (#2)
- Make all strings translatable (#8)
- Add `CONTRIBUTING.md` with contribution guidelines and documentation of plugin architecture (#10)
- Additional code consistent and commenting to improve quality and readability

### 0.2.0 (10 Feb, 2025)

- Add heading level "reset" and promotion features
- Add icons for each button to help differentiate
- Move features into separate sidebar with collapsible panels
- Add Github-friendly `README.md` in favorite of plugin repo-style readme
- Bump browsers list (no changes when compiling)

### 0.1.0

- Initial release with fake heading detection and conversion
