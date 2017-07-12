import { React, Tags } from './slide';

export = (
  <Tags.Slide>
    <Tags.Heading size={ 4 }>
      { 'Roadmap' }
    </Tags.Heading>
    <br />
    <Tags.Text>First Official Non-Beta Release</Tags.Text>
    <Tags.Text>Component View Abstractions</Tags.Text>
    <Tags.Text>
      { 'e.g., ' }
      <Tags.Link href='https://material.io/components/web/catalog/'>Material</Tags.Link>
      { ', ' }
      <Tags.Link href='http://foundation.zurb.com/building-blocks/'>Foundation</Tags.Link>
      { ', ' }
      <Tags.Link href='https://dev.office.com/fabric#/components'>Fabric</Tags.Link>
      { ', ' }
      <Tags.Link href='https://elements.polymer-project.org/'>Polymer</Tags.Link>
    </Tags.Text>
  </Tags.Slide>
);
