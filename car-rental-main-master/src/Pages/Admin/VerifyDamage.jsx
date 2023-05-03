import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function VerifyDamage() {
  const { id } = useParams();
  const [amount, setAmount] = useState('');
  const userid = window.localStorage.getItem('userid');

  const handleApproveClick = async () => {
    try {
      const response = await axios.post(
        `https://localhost:7050/damage-request/verify?id=${id}&userId=${userid}`,
        { amount },
        { headers: { 'Content-Type': 'application/json' } }
      );
      const data = response.data;
      alert('SuccessFully Approved');
    } catch (error) {
      alert('Error');
    }
  };

  return (
    <div>
      <h1>Verify Damage Request</h1>
      <label htmlFor="amount">Amount:</label>
      <input value={amount} onChange={(e) => setAmount(e.target.value)} />
      <br />
      <button onClick={handleApproveClick}>Approve</button>
    </div>
  );
}

export default VerifyDamage;
