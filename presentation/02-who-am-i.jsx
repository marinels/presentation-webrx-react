import { React, Tags, Images } from './slide';

const renderGitHubLink = (image, name) => {
  return (
    <div style={ ({ display: 'table-row' }) }>
      <Tags.Image className='img-circle profile' display='table-cell' margin='1rem' height={ 144 } src={ image } />
      <Tags.Heading size={ 4 } textAlign='left' margin='1rem' lineHeight='144px' style={ ({ display: 'table-cell', verticalAlign: 'middle' }) }>
        <Tags.Link href={ `https://github.com/${ name }` }><i className='fa fa-github' />{ `/${ name }` }</Tags.Link>
      </Tags.Heading>
    </div>
  );
};

export default (
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
