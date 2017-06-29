import { React, Tags, sanitizeCode } from './slide';

const source = sanitizeCode(require('raw-loader!../examples/whenAny-demo.ts'));

export = (
  <Tags.Slide>
    <Tags.Heading size={ 4 }>
      { 'Composing Observables with ' }
      <Tags.Code>whenAny</Tags.Code>
    </Tags.Heading>
    <br />
    <Tags.Text>Wrapper for <Tags.Code>combineLatest</Tags.Code></Tags.Text>
    <Tags.Text>Automatic <Tags.Code>startWith</Tags.Code> for Properties</Tags.Text>
    <Tags.CodePane lang='js' source={ source } textSize='1.5rem' style={ ({ lineHeight: 'normal' }) } />
  </Tags.Slide>
);
