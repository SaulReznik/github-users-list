import React from 'react';

class UserForm extends React.Component {
    //Copying our users data for editing
    state = {
        user: {...this.props.user},
    }

    onLoginChange = e => {
        this.setState({user: {
            ...this.state.user,
            login: e.target.value,
        }});
    }

    render() {
        const { user } = this.state;
        
        return (
            <div className='User'>
                <div className="UserFormContainer">
                    <span className='Label'>Login</span>
                    <input
                        onChange={e => this.onLoginChange(e)}
                        value={user.login}
                    />
                </div>
                <div className="ButtonContainer">
                    <button className="UserButton SuccessButton" onClick={() => this.props.onFormSubmit(user)}>Save Changes</button>
                    <button className="UserButton DangerButton" onClick={this.props.onFormCancel}>Cancel</button>
                </div>
            </div>
        );
    }
} 

export default UserForm;