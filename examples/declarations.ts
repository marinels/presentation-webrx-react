import { Component } from 'react';

interface WxStatic {
  command<T>(p?: (x: any) => T): any;
  property<T>(v?: T): any;
  whenAny(...args: any[]): any;
}

export let Rx: any;
export let Observable: any;
export let wx: WxStatic;

class AnyClass { constructor(...args: any[]) { return; } }

export class DataGridViewModel extends AnyClass {}
export class FormControl extends Component<any, any> {}
export class Tooltip extends Component<any, any> {}
export class BindableInput extends Component<any, any> {}
export class CommandButton extends Component<any, any> {}
export class DataGridView extends Component<any, any> {}
export class DataGridColumn extends Component<any, any> {}
export class ItemListPanelView extends Component<any, any> {}
