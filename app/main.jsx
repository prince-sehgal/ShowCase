var React = require('react');
var ReactDOM = require('react-dom');

var CommentBox = React.createClass({
  render: function() {
    return (
    <div>
       I am comment.
           <h1>{this.props.name}</h1>
            <CommentList/>
        </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    return (
    <div>
       I am comment List.  
             <Comment/>
        </div>
       
    );
  }
});

var Comment = React.createClass({
  render: function() {
    return (
    <div>
       I am comment.   
            <CommentForm/>
        </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
    <div>
       I am comment Form.           
        </div>
    );
  }
});





ReactDOM.render(<CommentBox name="Sample comment"></CommentBox>, app);
    

