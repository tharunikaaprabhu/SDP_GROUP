// ManageUsers.jsx
// import React from 'react';

const ManageUsers = () => {
    // Mock users data
    const users = [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' }
    ];

    return (
        <div className="bg-white shadow-md rounded p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Manage Users</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id} className="mb-2">
                        <strong>{user.name}</strong> - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ManageUsers;
