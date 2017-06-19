import { React, Tags, Theme, slides } from './init';
import '../slides';

export class Presentation extends React.Component<{}, {}> {
  render() {
    return (
      <Tags.Deck transition={ [ 'fade', 'spin' ] } transitionDuration={ 500 } progress='bar' theme={ Theme } controls>
        { this.renderSlides() }
      </Tags.Deck>
    );
  }

  private renderSlides() {
    return slides
      .map((x, i) => React.cloneElement(x, { key: i }));
  }
}
