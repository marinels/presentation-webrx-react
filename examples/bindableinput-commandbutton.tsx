import { wx, FormControl, BindableInput, CommandButton } from './declarations'; // IGNORE_LINE
const input = wx.property<string>();
// tslint:disable-next-line no-console // IGNORE_LINE
const cmd = wx.command(x => console.log(`Executed: '${ x }'`));
function render() {
  return (
    <div>
        <BindableInput property={ this.state.input }>
          <FormControl type='text' placeholder='Type Some Text In...' />
        </BindableInput>
        <CommandButton
          command={ this.state.cmd }
          commandParameter={ () => this.state.input.value }
        >
          <span>Execute!</span>
        </CommandButton>
    </div>
  );
}
