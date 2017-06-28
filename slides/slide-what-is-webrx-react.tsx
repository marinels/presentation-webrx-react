import { React, Tags } from './slide';

export = (
  <Tags.Slide>
    <Tags.Heading textFont='tertiary'>webrx-react?</Tags.Heading>
    <Tags.Text>
      <Tags.Code>webrx-react</Tags.Code>
      { ' is a single page application web framework written in ' }
      <Tags.Link href='https://www.typescriptlang.org/'>TypeScript</Tags.Link>
      { ' that aims to reduce boilerplate code by taking advantage of' }
      { ' monadic state mutations to drive efficient page component rendering.' }
    </Tags.Text>
  </Tags.Slide>
);
