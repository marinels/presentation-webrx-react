import { React, Tags } from './slide';

export default (
  <Tags.Slide bgColor='primary'>
    <Tags.Heading size={ 1 } lineHeight={ 1 } textColor='secondary'>
      <tt>webrx-react</tt>
    </Tags.Heading>
    <Tags.Text textColor='tertiary'>
      monadic development for the web using
    </Tags.Text>
    <Tags.Text textColor='tertiary'>
      <Tags.Code>RxJS</Tags.Code> and <Tags.Code>React</Tags.Code>
    </Tags.Text>
  </Tags.Slide>
);
