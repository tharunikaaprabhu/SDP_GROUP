// ManageBookings.jsx
// import React from 'react';

const ManageBookings = () => {
    // Mock bookings data
    const bookings = [
        { id: 1, event: 'Wedding', user: 'John Doe', date: '2023-09-15' },
        { id: 2, event: 'Corporate Meeting', user: 'Jane Smith', date: '2023-10-20' }
    ];

    return (
        <div className="bg-white shadow-md rounded p-6">
            <h2 className="text-xl font-semibold mb-4">Manage Bookings</h2>
            <ul>
                {bookings.map(booking => (
                    <li key={booking.id} className="mb-2">
                        <strong>{booking.event}</strong> - {booking.user} - {booking.date}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ManageBookings;
