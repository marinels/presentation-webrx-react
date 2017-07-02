interface WxStatic {
  command<T>(p?: (x: any) => T): any;
  property<T>(v?: T): any;
  whenAny(...args: any[]): any;
}

export let Rx: any;
export let Observable: any;
export let wx: WxStatic;
