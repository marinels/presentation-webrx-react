import { React, Tags, sanitize } from './slide';

const source = sanitize(require('raw-loader!../examples/web-api-demo.ts'));

export = (
  <Tags.Slide maxWidth={ 1200 } maxHeight='100%' margin={ 10 }>
    <Tags.Heading size={ 4 }>ObservableApi Demo</Tags.Heading>
    <Tags.CodePane lang='js' source={ source } textSize='1.5rem' style={ ({ lineHeight: 'normal' }) } />
  </Tags.Slide>
);
