import { React, Tags, sanitizeCode } from './slide';

const source = sanitizeCode(require('raw-loader!../examples/react-demo.tsx'));

export = (
  <Tags.Slide maxWidth={ 1200 } maxHeight='100%' margin={ 10 }>
    <Tags.Heading size={ 4 }>
      <Tags.Link href='https://codepen.io/patsissons/pen/BZrRzd'>React Demo</Tags.Link>
    </Tags.Heading>
    <Tags.Text textSize='14px'>(Click the title for a live demo)</Tags.Text>
    <Tags.CodePane lang='jsx' source={ source } textSize='1.4rem' style={ ({ lineHeight: 'normal' }) } />
  </Tags.Slide>
);
