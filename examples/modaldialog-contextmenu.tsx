import { wx, ModalDialogViewModel, ModalDialogView, ContextMenu, MenuItem, CommandButton } from './declarations'; // IGNORE_LINE
const modal = new ModalDialogViewModel();
function render() {
  return (
    <div>
      <ContextMenu id='menu' header='Open Modal'>
        <div>Summon A Context Menu</div>
        <MenuItem onClick={ this.bindEventToCommand(this.state, x => x.showModal) }>
          Show Modal
        </MenuItem>
      </ContextMenu>
      <ModalDialogView viewModel={ this.state.modal }  header='A Wild Modal Appears'>
        <CommandButton command={ this.state.modal.hideOnExecute(this.state.cancel) }>
          Cancel
        </CommandButton>
        <CommandButton command={ this.state.modal.hideOnExecute(this.state.accept) }>
          Accept
        </CommandButton>
      </ModalDialogView>
    </div>
  );
}
