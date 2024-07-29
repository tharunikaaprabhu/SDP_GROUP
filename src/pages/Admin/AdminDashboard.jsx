

// import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const AdminDashboard = () => {
    return (
        <div
            className="flex items-center justify-center h-screen bg-cover bg-center"
            style={{ backgroundImage: 'url("https://ik.imagekit.io/yzjvopjsjb/Home/eveimage.jpg?updatedAt=1722192397327")' }}
        >
            <div className="bg-black bg-opacity-60 p-6 rounded-lg shadow-lg">
                <div className="flex items-center">
                    <i className="fas fa-search text-white mr-3"></i>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="p-2 w-96 text-black rounded-lg outline-none"
                    />
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;

