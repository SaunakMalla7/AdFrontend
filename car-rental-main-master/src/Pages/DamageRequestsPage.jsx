import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Slider from './Admin/Slider';

const DamageRequestsPage = () => {
  const [damageRequests, setDamageRequests] = useState([]);
  const userid = window.localStorage.getItem('userid');
  useEffect(() => {
    const fetchDamageRequests = async () => {
      const response = await fetch(
        'https://localhost:7050/damage-request/view-all'
      );
      const data = await response.json();
      setDamageRequests(data);
    };

    fetchDamageRequests();
  }, []);

  async function handleapproveclick(id) {}
  return (
    <div>
      <div>
        <Slider />
        <section class="home-section">
          <h1>Damage Requests</h1>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Damage Type</th>
                <th>Vehicle Name</th>
                <th>Vehicle Type</th>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {damageRequests.map((damageRequest) => (
                <tr key={damageRequest.damageRequestId}>
                  <td>{damageRequest.damageRequestId}</td>
                  <td>
                    {new Date(damageRequest.damageRequestDate).toLocaleString()}
                  </td>
                  <td>{damageRequest.damageType}</td>
                  <td>{damageRequest.vehicleName}</td>
                  <td>{damageRequest.vehicleType}</td>
                  <td>
                    {damageRequest.customerFirstName}{' '}
                    {damageRequest.customerLastName}
                  </td>
                  <td>
                    <Link to={`/verify/${damageRequest.damageRequestId}`}>
                      <button>Verify Offer</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </section>
      </div>
    </div>
  );
};

export default DamageRequestsPage;
