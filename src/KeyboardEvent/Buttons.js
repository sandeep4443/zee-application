import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';

class Button extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            enteredKey: []
        };
        this.boundOnClick = this.onClick.bind(this);
    }

    onClick() {
        const { onClick, value, keys } = this.props;
        const { enteredKey } = this.state;
        this.setState({
            enteredKey: enteredKey.concat(keys)
        });

        onClick(value);
    }

    render() {
        const { children, keys } = this.props;
        const { enteredKey } = this.state;
        return (
            <div>
                <div>
                    <button type="button" className={styles.button} onClick={this.boundOnClick} id={keys}>{children}</button>
                </div>
                <div>
                    {enteredKey && enteredKey.map((val, index) => (
                        <li key={index}>
                            {val}
                        </li>
                    ))}
                </div>
            </div>
        );
    }
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    value: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    keys: PropTypes.number
};

export default Button;
