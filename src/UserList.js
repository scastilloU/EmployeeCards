import React, { Component } from 'react';
import UserCard from './UserCard';

class UserList extends Component {
  render() {
    return (
      <div className="user-list">
        {this.props.users.map((user, index) => (
          <UserCard
            key={index}
            name={user.name}
            age={user.age}
            occupation={user.occupation}
          />
        ))}
      </div>
    );
  }
}

export default UserList;
