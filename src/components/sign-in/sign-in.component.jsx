import React, {Component} from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'


import './sign-in.styles.scss'

class SignIn extends Component {
    constructor(prosp){
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({email: '', password: ''})
    }

    handleChange = (event) => {
        const {value, name} = event.target
        this.setState({ [name]: value }) // el parentesis cuadrado es para que según el nombre donde pase el change, tome el nombre correspondiente al envent.target... Dynamically setting the property value. Solo utilizas una función para los 2 posibles handleChange!
        
    }

    render(){
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label='email'
                        required 
                    />
                
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label='password'
                        required 
                    />
                    
                    <CustomButton type='submit'>Sign inn</CustomButton>
                    <CustomButton onClick={signInWithGoogle}>Sign inn</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn