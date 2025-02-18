# MRW Post Cleanup Utilities

v0.3.0

Mark Root-Wiley, [MRW Web Design](https://MRWweb.com)

A WordPress plugin that helps clean up posts with poor formatting.

![The Post Cleanup Utilities sidebar is visible in the WordPress post editor, showing features such as Fix Fake Headings and Strip Underlines](https://github.com/mrwweb/mrw-post-cleanup-utilities/blob/main/assets/cleanup-utilities-screenshot.png?raw=true)

## Features

- Detect fake headings and convert to real heading blocks at a selected level
- Set all heading blocks to one level
- Promote all heading blocks "up" a level in the hiearchy (e.g. H3 to H2)
- Strip all underline styles from the post
- Remove all "hard" linebreaks (the `<br>` tag)
- Replace all non-breaking spaces (`&nbsp;`) with regular spaces

## Changelog

See the [plugin roadmap](ROADMAP.md) for potential future features (sponsorships accepted for feature requests).

### 0.3.0 (18 Feb, 2025)

- Major refactor to componentize the transform buttons and sidebar sections for easier maintenance and contribution
- Add "Strip Underlines", "Remove Hard Linebreaks", and "Remove non-breaking spaces" features
- Make all strings translatable
- Add contributing guidelines

### 0.2.0 (10 Feb, 2025)

- Add heading level "reset" and promotion features
- Add icons for each button to help differentiate
- Move features into separate sidebar with collapsible panels
- Add Github-friendly readme in favorite of plugin repo-style readme
- Bump browsers list (no changes when compiling)

### 0.1.0

- Initial release with fake heading detection and conversion
