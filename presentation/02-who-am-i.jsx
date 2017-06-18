import { React, Tags, Images } from './slide';

function renderGitHubLink(image, name) {
  return (
    <Tags.Text style={ ({ display: 'table-row' }) }>
      <Tags.Image className='img-circle profile' display='table-cell' margin='1rem' height={ 144 } src={ image } />
      <Tags.Heading size={ 4 } textAlign='left' margin='1rem' lineHeight='144px' style={ ({ display: 'table-cell', verticalAlign: 'middle' }) }>
        <Tags.Link href={ `https://github.com/${ name }` }><i className='fa fa-github' />{ `/${ name }` }</Tags.Link>
      </Tags.Heading>
    </Tags.Text>
  );
}

export default (
  <Tags.Slide>
    <Tags.Heading>Who Am I?</Tags.Heading>
    <Tags.Heading size={ 4 }>Pat Sissons</Tags.Heading>
    <Tags.Heading size={ 4 }>Senior Software Developer</Tags.Heading>
    <Tags.Heading size={ 4 }>@ Marine Learning Systems</Tags.Heading>
    <Tags.Text textAlign='center' style={ ({ display: 'table' }) }>
      { renderGitHubLink(Images.me, 'patsissons') }
      { renderGitHubLink(Images.logo, 'marinels') }
    </Tags.Text>
  </Tags.Slide>
);
