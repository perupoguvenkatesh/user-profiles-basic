import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function UserCard({ user }) {
  const avatarUrl=`https://api.dicebear.com/9.x/avataaars/svg?seed=${user.username}&mood[]=happy`
 

  return (
    <li class="card w-100">
        <img src={avatarUrl} alt={user.username} className="card-img-top" />
        <p><span className="spanning">Name:</span>{user.name}</p>
        <p><span className="spanning">Email:</span> {user.email}</p>
        <p><span className="spanning">Phone:</span> {user.phone}</p>
        <p><span className="spanning">Company:</span> {user.company.name}</p>
        <p><span className="spanning">Address:</span> {user.address.city}, {user.address.street}</p>
    </li>
  );
}

export default UserCard;