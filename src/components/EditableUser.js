import React from 'react';
import PropTypes from 'prop-types';

import User from './User';
import UserForm from './UserForm';

class EditableUser extends React.Component {
    state = {
        isEditing: false,  //Flag for form
    };

    //Open the form with this handler
    onUserEdit = () => {
        this.setState({isEditing: true})
    }

    onFormSubmit = user => {
        this.props.handleFormSubmit(user);    //Send the edited user via this hanlder
        this.setState({ isEditing: false });  //And close the form
    };

    //Close the form without changes
    onFormCancel = () => this.setState({ isEditing: false }); 

    render() {
        const { user, onUserDelete } = this.props;

        //Using the form flag to decide what component to render
        return this.state.isEditing ?
        <UserForm
            key={user.id}
            user={user}
            onFormSubmit={this.onFormSubmit}
            onFormCancel={this.onFormCancel}
        /> :
        <User
            key={user.id}
            user={user}
            onUserEdit={this.onUserEdit}
            onUserDelete={onUserDelete}
        />
    }
}

export default EditableUser;

//Type validation
EditableUser.propTypes = {
    user: PropTypes.arrayOf(PropTypes.object)
};