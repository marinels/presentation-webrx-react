import * as React from 'react';
import * as Tags from 'spectacle';

// increase the default max width a bit
(<any>Tags.Slide).defaultProps.maxWidth = 1280;

export { React, Tags };

export function sanitizeCode(example: string) {
  return (example.match(/^(?!.*\/\/ IGNORE_LINE$).*/gm) || [])
    .join(`\n`)
    .trim()
    .replace(/&/gm, '&amp;');
}

export function notes(...lines: any[]) {
  const plist = lines.map(x => `\n<li>${ x }</li>`);
  return `<ul>${ plist }\n</ul>`;
}
