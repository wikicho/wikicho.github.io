# Typograms renderer

This file contains Google's [Typograms renderer](https://github.com/google/typograms), downloaded from the [official browser build](https://google.github.io/typograms/typograms.js).
The original build has SHA-256 `23b61d1dcd0a473c2f31ca3c2a78f231bde77e539b9a442e7c774ad97402331e`.
The Apache 2.0 license is retained in `typograms.LICENSE.txt`.

The renderer itself is unchanged.
Its startup wrapper renders immediately when the document is ready and renders new diagrams after `astro:page-load`.
A global initialization guard prevents duplicate listeners, and a per-diagram marker prevents duplicate SVGs.
The wrapper reads diagram source through `textContent`.

To update it, retrieve the official browser build, retain the license, and adapt only its final `DOMContentLoaded` wrapper to preserve these lifecycle checks.
