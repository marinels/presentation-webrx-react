import { React, Tags, sanitizeCode } from './slide';

const source = sanitizeCode(require('raw-loader!../examples/datagrid-itemlistpanel.tsx'));

export = (
  <Tags.Slide maxWidth={ 1200 } maxHeight='100%' margin={ 10 }>
    <Tags.Heading size={ 4 }>
      <Tags.Text><Tags.Code>DataGridView</Tags.Code> & <Tags.Code>ItemListPanelView</Tags.Code></Tags.Text>
    </Tags.Heading>
    <Tags.CodePane lang='jsx' source={ source } textSize='1rem' style={ ({ lineHeight: 'normal' }) } />
  </Tags.Slide>
);
