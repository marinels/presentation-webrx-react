import { React, Tags } from './slide';

export = (
  <Tags.Slide>
    <Tags.Heading size={ 4 }>
      The RouteManager
    </Tags.Heading>
    <br />
    <Tags.Text>Hash-based Routing State</Tags.Text>
    <Tags.Text>Use Browser <Tags.Code>history</Tags.Code> API</Tags.Text>
    <Tags.Text>Fallback on <Tags.Code>hashChanged</Tags.Code> events</Tags.Text>
    <Tags.Text>Routing State Decoded Automatically</Tags.Text>
    <Tags.Text><Tags.Code>saveRoutingState</Tags.Code> & <Tags.Code>loadRoutingState</Tags.Code></Tags.Text>
  </Tags.Slide>
);
