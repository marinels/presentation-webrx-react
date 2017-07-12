import { BaseViewModel, BaseView, BaseViewProps, CommandButton, classNames } from './declarations'; // IGNORE_LINE

class ToggleViewModel extends BaseViewModel {
  public readonly toggle = this.command<boolean>();
  public readonly enabled = this.toggle.results
    .scan(x => !x, false).toProperty(false);
}
interface ToggleProps extends BaseViewProps {}
class ToggleView extends BaseView<ToggleProps, ToggleViewModel> {
  updateOn() { return [ this.state.enabled.changed ]; }
  render() {
    const enabled = this.state.enabled.value;
    return <CommandButton
      className={ classNames('Toggle', { enabled }) }
      command={ this.state.toggle }>
        { this.props.children }
    </CommandButton>;
  }
}
