// Import React
import React from 'react';

// Import Spectacle Core tags
import * as Tags from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Import prismjs
import 'prismjs';
import 'prismjs/components/prism-jsx';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');
require('prismjs/themes/prism-tomorrow.css');
require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.css');
require('./style.css');

// http://paletton.com/#uid=13n0u0kobpudpS7l8AYpAdhuX4D
const theme = createTheme(
  {
    primary: '#011317',
    secondary: '#87D2E4',
    tertiary: '#3F9BB0',
    quartenary: '#216C7E'
  },
  {
    primary: 'Montserrat',
    secondary: 'Verdana'
  },
);

// patch the default text color on some components
theme.screen.components.code.color = theme.screen.colors.secondary;
theme.screen.components.quote.color = theme.screen.colors.secondary;
theme.screen.components.heading.h3.color = theme.screen.colors.secondary;
theme.screen.components.heading.h4.color = theme.screen.colors.secondary;
theme.screen.components.heading.h5.color = theme.screen.colors.secondary;
theme.screen.components.heading.h6.color = theme.screen.colors.secondary;
theme.screen.components.text.color = theme.screen.colors.secondary;

// patch code pane default font size and padding
theme.screen.components.codePane.pre.fontSize = theme.screen.components.code.fontSize;
theme.screen.components.codePane.pre.padding = '10px';

const defaultTransition = [ 'fade', 'spin' ];

export default class Presentation extends React.Component {
  render() {
    return (
      <Tags.Deck transition={ defaultTransition } transitionDuration={ 500 } progress='bar' theme={ theme } controls>
      </Tags.Deck>
    );
  }
}
