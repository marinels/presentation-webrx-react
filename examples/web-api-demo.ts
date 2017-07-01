import { Observable } from './declarations'; // IGNORE_LINE
declare class ObservableApi { constructor(s: string); getObservable<T>(...args: any[]): any; } // IGNORE_LINE
const api = new ObservableApi('//baconipsum.com/api/?type=');
Observable
  .timer(0, 5000)
  .take(10)
  // pick a random number of paragraphs between 1 and 5
  .map(x => Math.floor(Math.random() * 5) + 1)
  .flatMap(paras => {
    return api
      .getObservable<Array<string>>(
        'all-meat',
        { format: 'json', paras },
      );
  })
  .subscribe(
    x => { console.log(x); },
    e => { console.error(e); },
  );
