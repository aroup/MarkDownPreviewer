import React from 'react';
import ReactDOM from 'react-dom';
import NotMarked from './NotMarked';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MarkedUp from './MarkedUp';


class MainPage extends React.Component {
  constructor (props){
    super (props);
    this.state = {
      notMarkedText :'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*'
    };
    this.updateMarkedText= this.updateMarkedText.bind(this);
  }
  updateMarkedText(event){
    return this.setState({
      notMarkedText : event.target.value
    });
  }
  render() {
    return (
      <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <NotMarked
            value={this.state.notMarkedText}
            onChange={this.updateMarkedText}
          />
        </div>
        <div className="col-sm-6">
          <MarkedUp needMarkup={this.state.notMarkedText}/>
        </div>
      </div>
      </div>
    );
  }
}

export default MainPage;
