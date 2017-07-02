import { React, Tags, Images } from './slide';

export = (
  <Tags.Slide>
    <Tags.Heading size={ 4 }>
      <Tags.Link href='#TBD-codepen'>Canonical Todo List</Tags.Link>
    </Tags.Heading>
    <Tags.Text textSize='14px'>(Click the title for a live demo)</Tags.Text>
    <br />
    <Tags.Image src={ Images.todolist } />
  </Tags.Slide>
);
