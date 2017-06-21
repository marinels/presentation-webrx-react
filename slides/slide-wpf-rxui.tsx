import { React, Tags } from './slide';

export = (
  <Tags.Slide>
    <Tags.Heading size={ 4 } textFont='tertiary'>
      { 'Ideas from ' }
      <Tags.Link href='https://en.wikipedia.org/wiki/Windows_Presentation_Foundation'>WPF</Tags.Link>
      { ' and ' }
      <Tags.Link href='https://reactiveui.net/'>RxUI</Tags.Link>
    </Tags.Heading>
    <br />
    <Tags.Text>
      <Tags.Link href='https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel'>MVVM Pattern</Tags.Link>
    </Tags.Text>
    <Tags.Text>Data Binding</Tags.Text>
    <Tags.Text>View Templating</Tags.Text>
    <Tags.Text>Reactive Properties</Tags.Text>
    <Tags.Text>Reactive Commands</Tags.Text>
    <Tags.Text>Observable Composition with <Tags.Code>whenAny</Tags.Code></Tags.Text>
  </Tags.Slide>
);
