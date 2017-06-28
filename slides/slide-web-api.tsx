import { React, Tags } from './slide';

export = (
  <Tags.Slide>
    <Tags.Heading size={ 4 }>
      { 'Observable Web API' }
    </Tags.Heading>
    <br />
    <Tags.Text>
      { 'Using ' }
      <Tags.Link href='https://github.com/ReactiveX/rxjs/blob/master/src/observable/dom/AjaxObservable.ts'>
        { 'Observable.ajax' }
      </Tags.Link>
    </Tags.Text>
    <Tags.Text><Tags.Code>GET</Tags.Code> Data</Tags.Text>
    <Tags.Text><Tags.Code>POST</Tags.Code> Modifications</Tags.Text>
    <Tags.Text>Asynchronously Composable Results</Tags.Text>
  </Tags.Slide>
);
