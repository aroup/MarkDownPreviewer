import React,{PropTypes} from 'react';
import marked from 'marked';


const MarkedUp = ({needMarkup}) =>{
  marked.setOptions({
     gfm: true,
     tables: true,
     breaks: false,
     pedantic: false,
     sanitize: true,
     smartLists: true,
     smartypants: false
  });
  const text = needMarkup;
  const html = marked(text||'');

  return(
      <div dangerouslySetInnerHTML={{__html: html}}></div>
  );
};

MarkedUp.propTypes={
  needMarkup : PropTypes.string.isRequired
};

export default MarkedUp;
