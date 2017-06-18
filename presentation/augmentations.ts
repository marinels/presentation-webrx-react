// below are some type augmentations to captuer components not definied
// in the included spectacle type definitions
import * as React from 'react';
import * as Tags from 'spectacle';

interface HeadingPropsPatch extends Tags.HeadingProps {
  lineHeight?: any;
}

declare module 'spectacle' {
  interface BaseProps extends React.HTMLAttributes<any> {
  }

  interface DeckProps {
    theme?: any;
  }

  export interface NotesProps {
  }

  export class Notes extends React.Component<NotesProps, any> {}

  export interface MarkdownSlidesProps {
  }

  export class MarkdownSlides extends React.Component<MarkdownSlidesProps, any> {}

  export interface ComponentPlaygroundProps {
    code?: string;
    previewBackgroundColor?: string;
    theme?: string;
    scope?: any;
  }

  export class ComponentPlayground extends React.Component<ComponentPlaygroundProps, any> {}

  export interface TableHeaderProps {
  }

  export class TableHeader extends React.Component<TableHeaderProps, any> {}

  export interface TableBodyProps {
  }

  export class TableBody extends React.Component<TableBodyProps, any> {}

  export interface TypefaceProps {
    font?: string;
    googleFont?: string;
    weight?: number;
    italic?: boolean;
  }

  export class Typeface extends React.Component<TypefaceProps, any> {}
}
