import { React, Tags, Theme } from './init';
import slide01 from './01-splash';
import slide02 from './02-who-am-i';
import slide03 from './03-what-is-webrx-react';

export class Presentation extends React.Component<{}, {}> {
  render() {
    return (
      <Tags.Deck transition={ [ 'fade', 'spin' ] } transitionDuration={ 500 } progress='bar' theme={ Theme } controls>
        { slide01 }
        { slide02 }
        { slide03 }
      </Tags.Deck>
    );
  }
}
