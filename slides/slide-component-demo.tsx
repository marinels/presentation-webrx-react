import { React, Tags, sanitizeCode } from './slide';

const source = sanitizeCode(require('raw-loader!../examples/component-demo.tsx'));

export = (
  <Tags.Slide maxWidth={ 1200 } maxHeight='100%' margin={ 10 }>
    <Tags.Heading size={ 4 }>Component Demo</Tags.Heading>
    <Tags.CodePane lang='js' source={ source } textSize='1.5rem' style={ ({ lineHeight: 'normal' }) } />
  </Tags.Slide>
);
