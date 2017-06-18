import { React, Tags, Theme } from './init';

export default class Presentation extends React.Component {
  render() {
    return (
      <Tags.Deck transition={ [ 'fade', 'spin' ] } transitionDuration={ 500 } progress='bar' theme={ Theme } controls>
        { require('./01-splash').default }
        { require('./02-who-am-i').default }
      </Tags.Deck>
    );
  }
}
