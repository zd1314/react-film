import React from 'react';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>This is a test</h1>
        <p>The paragraph is a React test.</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
