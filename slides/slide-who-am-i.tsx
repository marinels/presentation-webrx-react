import { React, Tags, Images, createSlide } from './slide';
import { Image } from 'spectacle';

function renderGitHubLink(image: any, name: string) {
  return (
    <div style={ ({ display: 'table-row' }) }>
      <Tags.Image className='img-circle profile' display='table-cell' margin='1rem' height={ 144 } src={ image } />
      <Tags.Heading size={ 4 } textAlign='left' margin='1rem' style={ ({ display: 'table-cell', verticalAlign: 'middle', lineHeight: '144px' }) }>
        <Tags.Link href={ `https://github.com/${ name }` }><i className='fa fa-github' />{ `/${ name }` }</Tags.Link>
      </Tags.Heading>
    </div>
  );
}

export const who_am_i = createSlide(
  <Tags.Slide>
    <Tags.Heading>Who Am I?</Tags.Heading>
    <Tags.Heading size={ 4 }>Pat Sissons</Tags.Heading>
    <Tags.Heading size={ 4 }>Senior Software Developer</Tags.Heading>
    <Tags.Heading size={ 4 }>@ Marine Learning Systems</Tags.Heading>
    <div style={ ({ display: 'table', textAlign: 'center', margin: 'auto' }) }>
      { renderGitHubLink(Images.me, 'patsissons') }
      { renderGitHubLink(Images.logo, 'marinels') }
    </div>
  </Tags.Slide>
);
