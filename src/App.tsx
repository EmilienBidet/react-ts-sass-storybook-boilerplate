import * as React from 'react';
import {Hello} from './components/Hello/Hello';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Hello
            name = "Emilien"
            job = "Developer"
        />
      </div>
    );
  }
}

export default App;
