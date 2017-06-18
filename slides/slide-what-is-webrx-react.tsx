import { React, Tags, createSlide } from './slide';

export const what_is_webrx_react = createSlide(
  <Tags.Slide>
    <Tags.Heading textFont='tertiary'>webrx-react?</Tags.Heading>
    <Tags.Text>
      <Tags.Code bgColor='transparent'>webrx-react</Tags.Code>
      { ' is a SPA web framework written in ' }
      <Tags.Link href='https://www.typescriptlang.org/'>TypeScript</Tags.Link>
      { ' that aims to reduce boilerplate code by taking advantage of ' }
      <Tags.Link href='http://reactivex.io/rxjs/'>monadic state mutations</Tags.Link>
      { ' to drive efficient ' }
      <Tags.Link href='https://facebook.github.io/react/'>React</Tags.Link>
      {' component page renderings.' }
    </Tags.Text>
  </Tags.Slide>
);
