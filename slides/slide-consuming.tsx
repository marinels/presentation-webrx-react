import { React, Tags } from './slide';

export = (
  <Tags.Slide>
    <Tags.Heading size={ 4 }>
      { 'Consuming ' }
      <Tags.Code>webrx-react</Tags.Code>
    </Tags.Heading>
    <br />
    <Tags.Text>Published to <Tags.Link href='#todo'>npm</Tags.Link></Tags.Text>
    <Tags.Text>Available via <Tags.Link href='#todo'>npmcdn</Tags.Link></Tags.Text>
    <Tags.Text>Uglified Bundle for ES5+</Tags.Text>
    <Tags.Text>Modular Imports for TypeScript</Tags.Text>
  </Tags.Slide>
);
