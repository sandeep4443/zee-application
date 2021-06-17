import React from 'react';
class CalculatorBtn extends React.Component {
    render() {
        return (
            <button
                className={"button " + this.props.class}
                id={this.props.id}
                onClick={this.props.onClick}
            >
                <p>{this.props.value}</p>
            </button>
        );
    }
}

export default CalculatorBtn;