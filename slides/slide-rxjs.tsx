import { React, Tags, createSlide } from './slide';

createSlide(
  <Tags.Slide>
    <Tags.Heading size={ 4 } textFont='tertiary'>
      RxJS
    </Tags.Heading>
    <br />
    <Tags.Text>Monads as Observables</Tags.Text>
    <Tags.Text>Asynchronous event management</Tags.Text>
    <Tags.Text>Large library of operations</Tags.Text>
    <Tags.Text>Ported to many languages</Tags.Text>
  </Tags.Slide>,
);
