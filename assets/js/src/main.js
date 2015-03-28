/** @jsx React.DOM */

console.log('Start');

var MessageBox = React.createClass({
    render: function(){
        return (
            <div className="row">
                <h2>Hello, React!</h2>
                <SubMessage />
            </div>
            );
    }
});

var SubMessage = React.createClass({

    getInitialState: function(){
        return {
            isVisible : true,
            message : 'How is it goin\'?'
        }
    },

    render: function(){

        var hidden = !this.state.isVisible;
        var klass = hidden ? 'u-hidden' : '';

        return (
           <h5 className={klass}>{this.state.message}</h5>
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