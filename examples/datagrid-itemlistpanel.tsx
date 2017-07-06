import { Observable, wx, DataGridViewModel, DataGridView, DataGridColumn, ItemListPanelView, CommandButton, Tooltip } from './declarations'; // IGNORE_LINE
const grid = new DataGridViewModel(Observable.of([
  { id: 1, userName: 'hmar', name: 'Hank', lastName: 'Mardukas' },
]));
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
        <DataGridColumn header='Name'
          renderCell={ x => `${ x.firstName } ${ x.lastName }` }
        />
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
