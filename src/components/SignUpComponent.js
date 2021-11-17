import React from 'react'
import {connect} from 'react-redux'
import {signUserUp} from '../actions/userActions'

class SignUpComponent extends React.Component {
    state = {
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password1: "",
        password2: ""
    }

    handleOnChange = (e) => {
        e.persist();
        this.setState(() => ({
            [e.target.name]: e.target.value 
        }))
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.signUserUp(this.state)
    }

    render(){
        return(
            <div>
                <h1>SignUp Form</h1>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        name="first_name"
                        placeholder="First name"
                        value={this.state.first_name}
                        onChange={this.handleOnChange}
                    />
                    <br/>
                    <input
                        type="text"
                        name="last_name"
                        placeholder="Last name"
                        value={this.state.last_name}
                        onChange={this.handleOnChange}
                    />
                    <br/>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Username" 
                        value={this.state.username}
                        onChange={this.handleOnChange}
                    />
                    <br/>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleOnChange}
                    />
                    <br/>
                    <input
                        type="password"
                        name="password1"
                        placeholder="Password"
                        value={this.state.password1}
                        onChange={this.handleOnChange}
                    />
                    <br/>
                    <input
                        type="password"
                        name="password2"
                        placeholder="Confirm password"
                        value={this.state.password2}
                        onChange={this.handleOnChange}
                    />
                    <br/>
                    <input
                        type="submit"
                        value="Login"
                    />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUserUp: (userInfo) => dispatch(signUserUp(userInfo))
    }
}

export default connect(null, mapDispatchToProps)(SignUpComponent)