import { React, Tags, Images } from './slide';

export = (
  <Tags.Slide>
    <Tags.Heading size={ 4 }>
      <Tags.Link href='https://marinels.github.io/webrx-react/#/demo/todolist'>Canonical Todo List</Tags.Link>
    </Tags.Heading>
    <Tags.Text textSize='14px'>(Click the title for a live demo)</Tags.Text>
    <Tags.Image src={ Images.todolist } />
    <Tags.Image src={ Images.todolistFiltered } />
  </Tags.Slide>
);
