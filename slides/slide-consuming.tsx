import { React, Tags } from './slide';

export = (
  <Tags.Slide>
    <Tags.Heading size={ 4 }>
      { 'Consuming ' }
      <Tags.Code>webrx-react</Tags.Code>
    </Tags.Heading>
    <br />
    <Tags.Text>Published to <Tags.Link href='https://www.npmjs.com/package/webrx-react/'>npm</Tags.Link></Tags.Text>
    <Tags.Text>Available via <Tags.Link href='https://unpkg.com/webrx-react/'>unpkg (npmcdn)</Tags.Link></Tags.Text>
    <Tags.Text>Uglified Bundle for ES5+ (IE9 support)</Tags.Text>
    <Tags.Text>Modular Imports for ES6+ & TypeScript</Tags.Text>
  </Tags.Slide>
);
