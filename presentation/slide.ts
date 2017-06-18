import * as React from 'react';
import * as Tags from 'spectacle';

export { React, Tags };

let count = 0;

export interface OrderedSlide {
  order: number;
  slide: any;
}

export function createSlide(slide: any): OrderedSlide {
  return { order: count++, slide };
}
