import { React, Tags, Theme, OrderedSlide } from './init';
import * as slides from '../slides';

export class Presentation extends React.Component<{}, {}> {
  render() {
    return (
      <Tags.Deck transition={ [ 'fade', 'spin' ] } transitionDuration={ 500 } progress='bar' theme={ Theme } controls>
        { this.renderSlides() }
      </Tags.Deck>
    );
  }

  private renderSlides() {
    return Object
      .keys(slides)
      .map(x => {
        const os: OrderedSlide = (slides as any)[x];
        return { name: x, order: os.order, slide: os.slide };
      })
      .sort((a, b) => a.order - b.order)
      .map(x => React.cloneElement(x.slide, { key: x.name }));
  }
}
