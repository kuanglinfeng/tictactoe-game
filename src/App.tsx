import React from 'react';
import Game from './component/Game';


class App extends React.Component<{}, {}> {
  state = {
    num: 0
  }
  render() {
    return (
      <div>
        <Game />
      </div>
    )
  }
}


export default App;
