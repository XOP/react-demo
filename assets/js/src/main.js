/** @jsx React.DOM */

console.log('Start');

var MessageBox = React.createClass({
    render: function(){
        return (
            <div className="column">
                <h2>Hello, React!</h2>
                <hr/>
            </div>
            );
    }
});

React.render(
    <MessageBox/>,
    document.getElementById('react-app'),
    function(){
        console.log('rendered OK');
    }
);

console.log('End');