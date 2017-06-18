import { React, Tags, createSlide } from './slide';

export const splash = createSlide(
  <Tags.Slide>
    <Tags.Heading size={ 1 } lineHeight={ 1 } textFont='tertiary'>
      webrx-react
    </Tags.Heading>
    <Tags.Text>
      monadic development for the web using
    </Tags.Text>
    <Tags.Text>
      <Tags.Code bgColor='transparent'>RxJS</Tags.Code>
      { ' and ' }
      <Tags.Code bgColor='transparent'>React</Tags.Code>
    </Tags.Text>
  </Tags.Slide>
);
