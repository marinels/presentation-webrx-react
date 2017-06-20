import * as React from 'react';
import * as Tags from 'spectacle';

export { React, Tags };

export const slides: Array<any> = [];

export function createSlide(slide: any) {
  slides.push(slide);

  return slide;
}
