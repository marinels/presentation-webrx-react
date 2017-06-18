import React from 'react';
import * as Tags from 'spectacle';
import images from './images';

export default (
  <Tags.Slide>
    <Tags.Heading>Who Am I?</Tags.Heading>
    <br />
    <Tags.Heading size={ 4 }>Pat Sissons</Tags.Heading>
    <Tags.Heading size={ 4 }>Senior Software Developer</Tags.Heading>
    <Tags.Heading size={ 4 }>@ Marine Learning Systems</Tags.Heading>
    <span>
      <Tags.Image className='img-circle img-center profile' height={ 144 } src={ images.me } />
      <Tags.Image className='img-circle img-center profile' height={ 144 } src={ images.logo } />
    </span>
    <br />
    <Tags.Heading size={ 5 }>
      <Tags.Link href='https://github.com/marinels'><i className='fa fa-github' />/marinels</Tags.Link>
    </Tags.Heading>
    <Tags.Heading size={ 5 }>
      <Tags.Link href='https://github.com/patsissons'><i className='fa fa-github' />/patsissons</Tags.Link>
    </Tags.Heading>
  </Tags.Slide>
);
