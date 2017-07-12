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

export class BaseViewModel extends AnyClass {
  command<T>(...args: any[]): any { return; }
  property(...args: any[]): any { return; }
  whenAny(...args: any[]): any { return; }
}
export interface BaseViewProps {}
export class BaseView<P, S> extends AnyClass {
  props: any;
  state: any;
}

export function classNames(...args: any[]): any { return; }

export class DataGridViewModel extends AnyClass {}
export class ModalDialogViewModel extends AnyClass {}
export class RouteHandlerViewModel extends AnyClass {}
export class DemoComponentViewModel extends AnyClass {}

export class FormControl extends Component<any, any> {}
export class Tooltip extends Component<any, any> {}
export class BindableInput extends Component<any, any> {}
export class CommandButton extends Component<any, any> {}
export class DataGridView extends Component<any, any> {}
export class DataGridColumn extends Component<any, any> {}
export class ItemListPanelView extends Component<any, any> {}
export class ModalDialogView extends Component<any, any> {}
export class ContextMenu extends Component<any, any> {}
export class MenuItem extends Component<any, any> {}
export class RouteHandlerView extends Component<any, any> {}
export class DemoComponentView extends Component<any, any> {}
