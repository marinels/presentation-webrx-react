import { React, Tags, sanitizeCode } from './slide';

const source = sanitizeCode(require('raw-loader!../examples/rxjs-demo.ts'));

export = (
  <Tags.Slide maxWidth={ 1200 } maxHeight='100%' margin={ 10 }>
    <Tags.Heading size={ 4 }>
      <Tags.Link href='https://codepen.io/patsissons/pen/YQZPEM'>RxJS Demo</Tags.Link>
    </Tags.Heading>
    <Tags.Text textSize='14px'>(Click the title for a live demo)</Tags.Text>
    <Tags.CodePane lang='js' source={ source } textSize='1.5rem' style={ ({ lineHeight: 'normal' }) } />
  </Tags.Slide>
);
