import React,{PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const NotMarked = ({value,onChange}) => {
  let InternalStyles = {
    div: {
      margin: 0
    },
    textarea: {
      width : '80%',
      resize: 'none'
    }
  };
  return(
      <MuiThemeProvider>
        <div className="container">
        <div className="row">
        <div className="col-sm-6"  style={InternalStyles.div}>
            <TextField
             value={value}
             floatingLabelText="Enter Text Here"
             multiLine
             style={InternalStyles.textarea}
             onChange={onChange}
             rowsMax={20}/> <br/>
        </div>
        </div>
        </div>
      </MuiThemeProvider>
  );
};

NotMarked.propTypes = {
  value : PropTypes.string,
  onChange : PropTypes.func.isRequired
};

export default NotMarked;
