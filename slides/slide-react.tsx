import { React, Tags } from './slide';

export = (
  <Tags.Slide>
    <Tags.Heading size={ 4 }>
      <Tags.Link href='https://facebook.github.io/react/'>React</Tags.Link>
      { ' Rendering Engine' }
    </Tags.Heading>
    <br />
    <Tags.Text>Readonly Component Attributes</Tags.Text>
    <Tags.Text>Readonly Snapshots of Mutable State</Tags.Text>
    <Tags.Text>Declarative Templating</Tags.Text>
    <Tags.Text>Observable Results Invoke Rendering</Tags.Text>
  </Tags.Slide>
);
