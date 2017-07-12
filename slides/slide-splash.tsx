import { React, Tags } from './slide';

export = (
  <Tags.Slide>
    <Tags.Heading size={ 1 } textFont='tertiary'>
      webrx-react
    </Tags.Heading>
    <Tags.Heading size={ 6 }>
      Monadic Development for the Web
    </Tags.Heading>
    <Tags.Heading size={ 6 }>
      { 'Using ' }
      <Tags.Link href='https://github.com/ReactiveX/rxjs/'>RxJS</Tags.Link>
      { ' and ' }
      <Tags.Link href='https://facebook.github.io/react/'>React</Tags.Link>
    </Tags.Heading>
    <br />
    <Tags.Text textSize='18pt'>Follow Along @ <Tags.Link textFont='tertiary' href='https://git.io/vQ10Y'>https://git.io/vQ10Y</Tags.Link></Tags.Text>
  </Tags.Slide>
);
