import React from 'react';

const User = props => {
    //Destructuring stuff for better developer experience
    const { user, onUserEdit, onUserDelete } = props;
    const { avatar, login, url, id } = user;

    return (
        <div className='User'>
            <div className="UserColumn">
                <div className="ImageContainer">
                    <img alt='avatar' src={avatar} />
                </div>
                <div>
                    <h2>{login}</h2>
                    <a href={url} target="_blank" rel="noopener noreferrer">{login}'s page</a>
                </div>
            </div>
            <div className="ButtonContainer">
                <button className="UserButton SuccessButton" onClick={onUserEdit}>Edit</button>
                <button className="UserButton DangerButton" onClick={() => onUserDelete(id)}>Delete</button>
            </div>
        </div>
    )
}

export default User;