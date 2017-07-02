import { React, Tags, sanitizeCode } from './slide';

const source = sanitizeCode(require('raw-loader!../examples/modaldialog-contextmenu.tsx'));

export = (
  <Tags.Slide maxWidth={ 1200 } maxHeight='100%' margin={ 10 }>
    <Tags.Heading size={ 4 }>
      <Tags.Text><Tags.Code>ModalDialogView</Tags.Code> & <Tags.Code>ContextMenu</Tags.Code></Tags.Text>
    </Tags.Heading>
    <Tags.CodePane lang='jsx' source={ source } textSize='1.5rem' style={ ({ lineHeight: 'normal' }) } />
  </Tags.Slide>
);
