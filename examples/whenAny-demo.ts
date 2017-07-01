import { Observable, wx } from './declarations'; // IGNORE_LINE
wx.whenAny(
  Observable.of('x1'),
  Observable.timer(1000, 1000).take(2).select(x => `x2-${ x }`),
  Observable.from([ 'x3-0', 'x3-1', 'x3-2' ]),
  (x1, x2, x3) => ({ x1, x2, x3 }),
)
// { x1, x2-0, x3-0 }
.subscribe(x => { console.log(JSON.stringify(x)); });
