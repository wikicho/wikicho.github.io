# Review fixes

The fixes address the review findings while preserving the existing site settings and blog content.

- Analytics require acceptance of the analytics category when cookie consent is enabled. Visitors can reopen preferences and withdraw consent.
- Deployment settings load from `.env` before Astro configuration is evaluated; shell and CI variables retain priority.
- Drafts are omitted from production post routes, recommendations, archives, feeds, and search. Layouts also explicitly exclude draft content from Pagefind.
- Search controls mount their command palette. RSS links use `/rss.xml`.
- An undefined publication author limit displays all authors. BibTeX comment handling preserves escaped percent signs.
- The build explicitly refreshes citations before running Astro and Pagefind with Yarn 4.
- Both post layouts honor `toc`. Navigation refreshes reading progress and section observers; widgets and tabs also initialize without View Transitions.
- Post cover metadata includes the deployment base path. Typograms has a bundled renderer and license. Category badges have generated archives.
- The homepage smoke test reads the configuration-driven Person metadata and checks configured navbar destinations instead of a removed demo page. Year archives link to subsequent pages.

An existing local CERN draft received required frontmatter so local builds pass. It remains untracked and is excluded from the published commit. Its provisional date should be confirmed before publication.

## Verification

- Final checks passed: `yarn build`, `yarn test:types` (zero errors), `yarn lint:ci`, `yarn test` (85 tests), and `yarn test:e2e` (9 Chromium smoke tests). Yarn was invoked through Corepack in this environment.
- Unit regression coverage includes draft recommendations, escaped BibTeX percent signs, and both unlimited and finite author limits.
- A temporary `.env` fixture confirmed the resolved origin and base path, plus shell override priority.
- Chromium fixtures exercised View Transitions both enabled and disabled: consent rejection, acceptance after navigation, withdrawal and GA cookie removal; Pagefind draft exclusion; search controls and shortcut; TOC flags and highlighting; reading progress; tabs and copy buttons; widget startup; base-prefixed image metadata; category routes; and year pagination.
- External tracker requests and Mermaid/PhotoSwipe modules were mocked for these browser fixtures. The actual bundled Typograms renderer was exercised. Temporary fixtures and configuration changes were restored before final checks.
