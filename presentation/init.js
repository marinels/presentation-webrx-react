/// <reference path="./augmentations.d.ts" />

import { React, Tags, Images } from './slide';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Import prismjs
import 'prismjs';
import 'prismjs/components/prism-jsx';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');
require('prismjs/themes/prism-tomorrow.css');
require('font-awesome/css/font-awesome.css');
require('./style.css');

// http://paletton.com/#uid=13n0u0kobpudpS7l8AYpAdhuX4D
const Theme = createTheme(
  {
    primary: '#011317',
    secondary: '#87D2E4',
    tertiary: '#3F9BB0',
    quartenary: '#216C7E'
  },
  {
    primary: { name: 'Montserrat', googleFont: true, styles: [ '400', '700' ] },
    secondary: 'Verdana',
    // we don't actually need to load Roboto Mono as a google font since
    // we get it for free with codemirror.css (via ComponentPlayground)
    tertiary: { name: 'Roboto Mono'/*, googleFont: true, styles: [ '400', '700' ]*/ }
  },
);

// patch the default text color on some components
Theme.screen.components.code.color = Theme.screen.colors.secondary;
Theme.screen.components.quote.color = Theme.screen.colors.secondary;
Theme.screen.components.heading.h3.color = Theme.screen.colors.secondary;
Theme.screen.components.heading.h4.color = Theme.screen.colors.secondary;
Theme.screen.components.heading.h5.color = Theme.screen.colors.secondary;
Theme.screen.components.heading.h6.color = Theme.screen.colors.secondary;
Theme.screen.components.text.color = Theme.screen.colors.secondary;
Theme.screen.components.code.backgroundColor = 'rgba(255, 255, 255, 0.25)';
Theme.screen.components.code.display = 'inline-block';

// patch code pane default font size and padding
Theme.screen.components.codePane.pre.fontSize = Theme.screen.components.code.fontSize;
Theme.screen.components.codePane.pre.padding = '10px';

export { React, Tags, Images, Theme };
