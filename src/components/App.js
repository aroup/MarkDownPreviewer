import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './MainPage';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends React.Component {
  render() {
    return (
      <div>
        <MainPage/>
      </div>
    );
  }
}
export default App;
