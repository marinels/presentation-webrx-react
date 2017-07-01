import { Component } from 'react'; // IGNORE_LINE
import { Rx } from './declarations'; // IGNORE_LINE
class HelloThereComponent extends Component<{}, { counter: number }> {
  constructor() { super(); this.state = { counter: 0 }; }
  componentWillMount() {
    Rx.Observable
      .timer(0, 2800) // gif has a duration of ~2800ms
      .subscribe(x => this.setState(() => ({ counter: x + 1 })));
  }
  render() {
    return (
      <div style={({ textAlign: 'center' })}>
        <img src='http://gph.to/2tC4JiE' />
        <h3>Hellos There'd: { this.state.counter }</h3>
      </div>
    );
  }
}
