declare const Rx: any; // IGNORE_LINE
const container = document.getElementById('container');
const baseUri = '//baconipsum.com/api/?type=all-meat&format=html';
Rx.Observable
  .timer(0, 5000)
  .take(10)
  // pick a random number of paragraphs between 1 and 5
  .map(x => Math.floor(Math.random() * 5) + 1)
  .flatMap(x => {
    return Rx.Observable
      .ajax({
        url: `${ baseUri }&paras=${ x }`,
        crossDomain: true,
        responseType: 'text',
      });
  })
  .subscribe(x => {
    container.innerHTML = x.response;
  });
