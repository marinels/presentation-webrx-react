import { wx, DataGridView,  DataGridColumn, ItemListPanelView, CommandButton, Tooltip } from './declarations'; // IGNORE_LINE
const input = wx.property<string>();
const cmd = wx.command(x => console.log(`Executed: '${ x }'`));
function render() {
  return (
    <div>
      <DataGridView viewModel={ this.state.grid }>
        <DataGridColumn fieldName='id' header='User ID' />
        <DataGridColumn header='Name'
          renderCell={ x => `${ x.firstName } ${ x.lastName }` }
        />
      </DataGridView>
      <ItemListPanelView viewModel={ this.state.grid }>
        <DataGridColumn
          renderCell={ x => (<CommandButton command={ this.state.viewUser } />) }
          tooltip={ x => x == null ?
            (<Tooltip>Click the Button to view the user</Tooltip>) :
            (<Tooltip>{ `View User ${ x.userName }` }</Tooltip>)
          }
        />
      </ItemListPanelView>
    </div>
  );
}
