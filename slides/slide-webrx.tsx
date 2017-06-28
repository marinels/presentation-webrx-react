import { React, Tags } from './slide';

export = (
  <Tags.Slide>
    <Tags.Heading size={ 4 }>
      { 'A Lightweight Port of ' }
      <Tags.Link href='https://github.com/WebRxJS/WebRx'>webrx</Tags.Link>
    </Tags.Heading>
    <br />
    <Tags.Text>Reactive Object Framework</Tags.Text>
    <Tags.Text>Smaller Footprint, More Modularity</Tags.Text>
    <Tags.Text>Support for TypeScript <Tags.Code>2.3.x</Tags.Code></Tags.Text>
    <Tags.Text>Support for RxJS <Tags.Code>5.x.x</Tags.Code></Tags.Text>
    <Tags.Text>Closer Approximation to RxUI</Tags.Text>
  </Tags.Slide>
);
