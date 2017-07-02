import { RouteHandlerViewModel, DemoComponentViewModel, DemoComponentView, RouteHandlerView } from './declarations'; // IGNORE_LINE
const routingMap = {
  '/Demo': { path: '/Demo/' }, // redirect
  '^/Demo/(.*)$': { path: '/Demo/', creator: () => new DemoComponentViewModel() },
};
const viewMap = {
  Demo: (viewModel: DemoComponentViewModel) => (
    <DemoComponentView viewModel={ viewModel }>
      <div>Routed Content: { this.state.param.value }</div>
    </DemoComponentView>
  ),
};
const router = new RouteHandlerViewModel(routingMap);
function render() {
  return (
    <div>
      <div>Header (see PageHeaderView)</div>
      <RouteHandlerView viewModel={ this.state.router } viewMap={ viewMap } />
      <div>Footer (see PageFooterView)</div>
    </div>
  );
}
