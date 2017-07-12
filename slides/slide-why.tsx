import { React, Tags, notes } from './slide';

export = (
  <Tags.Slide notes={ notes('Angular2 did not exist at the time') }>
    <Tags.Heading size={ 4 }>Why?</Tags.Heading>
    <br />
    <Tags.Text>Modular Sharable Components</Tags.Text>
    <Tags.Text>Snappy Responsive Complex Views</Tags.Text>
    <Tags.Text>IE9+ Compatibility</Tags.Text>
  </Tags.Slide>
);
