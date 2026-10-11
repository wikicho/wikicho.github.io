import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import type { BibEntry } from '../../utils/bibtex';
import { BibSearch } from './BibSearch';

const entry: BibEntry = {
  type: 'article',
  key: 'four-authors',
  fields: {
    title: 'A publication with four authors',
    author: 'First Author and Second Author and Third Author and Fourth Author',
    year: '2024',
  },
};

describe('BibSearch author limit', () => {
  it('shows every author when the configured limit is undefined', () => {
    const html = renderToStaticMarkup(
      createElement(BibSearch, { entries: [entry], maxAuthorLimit: undefined }),
    );
    expect(html).toContain('Fourth Author');
    expect(html).not.toContain('more author');
  });

  it('still truncates authors when a finite limit is configured', () => {
    const html = renderToStaticMarkup(
      createElement(BibSearch, { entries: [entry], maxAuthorLimit: 3 }),
    );
    expect(html).toContain('Third Author');
    expect(html).not.toContain('Fourth Author');
    expect(html).toContain('more author');
  });
});
