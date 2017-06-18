import { React, Tags } from './slide';

export default (
  <Tags.Slide>
    <Tags.Heading textFont='tertiary'>webrx-react?</Tags.Heading>
    <Tags.Text>
      <Tags.Code bgColor='transparent'>webrx-react</Tags.Code>
      { ' is a SPA web framework written in ' }
      <Tags.Link href='https://www.typescriptlang.org/'>TypeScript</Tags.Link>
      { ' that aims to reduce boilerplate code by taking advantage of ' }
      <Tags.Link href='http://reactivex.io/rxjs/'>monadic state mutations</Tags.Link>
      { ' to drive efficient React component page renderings.' }
    </Tags.Text>
  </Tags.Slide>
);
