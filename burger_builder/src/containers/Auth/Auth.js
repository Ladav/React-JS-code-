import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from '../../UI/Forms/Input/Input';
import Button from '../../UI/Button/Button';
import classes from './Auth.css';
import * as action from '../../store/action/index';

class Auth extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { };
    // }

    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail'
                },
                value: '',
                validations: {
                    isRequired: true,
                    isEmail: true
                },
                valid: false,
                touched: false,
                type: 'Email'
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validations: {
                    isRequired: true,
                    minLength: 6
                },
                valid: false,
                touched: false,
                type: 'Password'
            }
        }
    };

    validateElement = (value, rules) => {
        let isValid = true;
        if(rules) {
            if (rules.isRequired) isValid = value.trim() !== '';
            if (rules.maxLength) isValid = value.length <= rules.maxLength && isValid === true;
            if (rules.minLength) isValid = value.length >= rules.minLength && isValid === true;
        }

        return isValid;
    }

    inputChangedHandler = (event, elName) => {
        const updatedControls = {
            ...this.state.controls
        };

        const updatedElement = {
            ...updatedControls[elName],
            value: event.target.value,
            valid: this.validateElement(event.target.value, this.state.controls[elName].validations),
            touched: true
        };
        updatedControls[elName] = updatedElement;

        this.setState({controls: updatedControls})
    };

    onSubmitHandler = (event) => {
        event.preventDefault();
        this.props.authUser();
    }

    render() {
        let formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        let form = formElementsArray.map(el => {
            return (
                <Input
                    key={el.id}
                    elementType={el.config.elementType}
                    elementConfig={el.config.elementConfig}
                    value={el.config.value}
                    invalid={!el.config.valid}
                    requireValidations={el.config.validations}
                    touched={el.config.touched}
                    type={el.config.type}
                    changed={(event) => this.inputChangedHandler(event, el.id)} />);
        });

        return (
            <div className={classes.Auth}>
                <form onSubmit={this.onSubmitHandler}>
                    {form}
                    <Button btnType="Success">SUBMIT</Button>
                </form>
            </div>
        );
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        authUser: () => dispatch(action.auth())
    };
};

export default connect(null, mapDispatchToProps)(Auth);