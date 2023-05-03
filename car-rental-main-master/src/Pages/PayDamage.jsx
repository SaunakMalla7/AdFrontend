import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PayDamage() {
  const { id } = useParams();
  const [amount, setAmount] = useState('');
  const [damage, setDamage] = useState([]);
  const [paymentType, setPaymentType] = useState('');
  const userId = window.localStorage.getItem('userid');

  useEffect(() => {
    // Fetch the damage data from the API endpoint
    fetch(`https://localhost:7050/damage-request/view-${id}`)
      .then((response) => response.json())
      .then((data) => setDamage(data))
      .catch((error) => console.log(error));
  }, [id]);

  const handlePayClick = async () => {
    const confirmed = window.confirm(
      'Are you sure you want to pay for this damage?'
    );
    if (!confirmed) {
      return;
    }

    const paymentData = {
      paymentType,
    };

    try {
      const response = await axios.post(
        `https://localhost:7050/damagepayment/payment?requestId=${id}`,
        paymentData
      );
      console.log(response.data);
      alert('Payment made successfully!');
      console.log(paymentType);
    } catch (error) {
      console.error(error);
      alert('Payment failed! Please try again.');
    }
  };

  return (
    <div>
      <h1>Pay Damage Request</h1>
      <h2>Pay Damage Amount RS {damage.amount}</h2>
      <form onSubmit={handlePayClick}>
        <label htmlFor="paymentType">Payment Type:</label>
        <input
          type="text"
          id="paymentType"
          value={paymentType}
          onChange={(e) => setPaymentType(e.target.value)}
        />
        <button type="submit">Pay Damage</button>
      </form>
    </div>
  );
}

export default PayDamage;
