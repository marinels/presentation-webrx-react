import { React, Tags, sanitizeCode } from './slide';

const source = sanitizeCode(require('raw-loader!../examples/routehandler.tsx'));

export = (
  <Tags.Slide maxWidth={ 1200 } maxHeight='100%' margin={ 10 }>
    <Tags.Heading size={ 4 }>
      <Tags.Text><Tags.Code>RouteHandlerView</Tags.Code></Tags.Text>
    </Tags.Heading>
    <Tags.CodePane lang='jsx' source={ source } textSize='1.3rem' style={ ({ lineHeight: 'normal' }) } />
  </Tags.Slide>
);
