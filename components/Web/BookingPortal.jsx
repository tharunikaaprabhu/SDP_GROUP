import React, { useState } from 'react';
import './BookingPortal.css';

const BookingPortal = () => {
  const [eventDetails, setEventDetails] = useState({
    name: '',
    date: '',
    location: '',
    requirements: '',
    services: '',
  });
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    // Here you would typically send the booking request to the backend
    console.log('Booking submitted:', eventDetails);
    // Reset form after submission
    setEventDetails({
      name: '',
      date: '',
      location: '',
      requirements: '',
      services: '',
    });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages(prev => [...prev, { text: newMessage, sender: 'organizer' }]);
      setNewMessage('');
      // Here you would typically send the message to the backend
    }
  };

  return (
    <div className="booking-portal">
      <h1>Event Booking Portal</h1>
      
      <div className="booking-form">
        <h2>Submit Booking Request</h2>
        <form onSubmit={handleSubmitBooking}>
          <input
            type="text"
            name="name"
            value={eventDetails.name}
            onChange={handleInputChange}
            placeholder="Event Name"
            required
          />
          <input
            type="date"
            name="date"
            value={eventDetails.date}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="location"
            value={eventDetails.location}
            onChange={handleInputChange}
            placeholder="Event Location"
            required
          />
          <textarea
            name="requirements"
            value={eventDetails.requirements}
            onChange={handleInputChange}
            placeholder="Event Requirements"
            required
          />
          <textarea
            name="services"
            value={eventDetails.services}
            onChange={handleInputChange}
            placeholder="Desired Services"
            required
          />
          <button type="submit">Submit Booking Request</button>
        </form>
      </div>

      <div className="communication">
        <h2>Communication with Event Manager</h2>
        <div className="message-list">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSendMessage} className="message-form">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default BookingPortal;