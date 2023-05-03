import React, { useState } from 'react';

function AddDamageRequest() {
  const [description, setDescription] = useState('');
  const rentId = localStorage.getItem('returnid');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      description: description,
      rentId: rentId,
      verifiedBy: '',
    };

    const response = await fetch('https://localhost:7050/damage-request/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(data),
    });

    if (response.ok) {
      const newDamageRequest = await response.json();
      alert('New damage request created:', newDamageRequest);
      console.log(data);
    } else {
      console.error('Failed to create damage request');
      console.log(data);
    }
  };

  return (
    <div>
      <h2>Add Damage Request</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-3"></div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddDamageRequest;
