import { React, Tags, createSlide } from './slide';

const source = `
const container = document.getElementById('container');
const baseUri = '//baconipsum.com/api/?type=all-meat&format=html&';
Rx.Observable
  .timer(0, 5000)
  .take(10)
  .map(x => Math.floor(Math.random() * 5) + 1)
  .flatMap(x => {
    return Rx.Observable
      .ajax({
        url: \`\${ baseUri }paras=\${ x }\`,
        crossDomain: true,
        responseType: 'text',
      });
  })
  .subscribe(x => {
    container.innerHTML = x.response;
  })
`.trim();

createSlide(
  <Tags.Slide>
    <Tags.Heading size={ 4 }>
      <Tags.Link href='https://codepen.io/patsissons/pen/YQZPEM'>RxJS Demo</Tags.Link>
    </Tags.Heading>
    <Tags.Text textSize='14px'>(Click the title for a live demo)</Tags.Text>
    <Tags.CodePane lang='js' source={ source } textSize='1.5rem' style={ ({ lineHeight: 'normal' }) } />
  </Tags.Slide>,
);
