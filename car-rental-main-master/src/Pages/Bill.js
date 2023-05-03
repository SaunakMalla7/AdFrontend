import React from 'react';
import Navbar from '../components/Navbar';
import HeroPages from '../components/HeroPages';

function Bill({ paymentData }) {
  const rent = paymentData.rent ?? {};
  const vehicle = rent.vehicle ?? {};
  const rentalDays = rent.rentDuration ?? 0;
  const rentPerDay = vehicle.rentPerDay ?? 0;
  const customer = rent.applicationUser ?? {};
  const staff = rent.applicationStaff ?? {};
  const totalAmount = paymentData.totalAmount ?? 0;
  const isPaid = paymentData.isPaid ?? false;
  const hasDamageRequest = paymentData.hasDamageRequest ?? false;

  const handleDamageRequest = () => {
    window.localStorage.setItem('damagerentid', rent.id);
    window.location.href = `/damage-request`;
  };

  return (
    <>
      <section className="contact-page">
        <Navbar />
        {/* <HeroPages name="User Rented " /> */}
        <div className="card">
          <div className="card-header bg-primary text-white">
            <h2>Bill</h2>
          </div>
          <div className="card-body">
            <p>Payment Date: {paymentData.paymentDate ?? '-'}</p>
            <p>Rent Id: {rent.id ?? '-'}</p>
            <p>
              Customer Name: {customer.firstName ?? '-'}{' '}
              {customer.lastName ?? '-'}
            </p>
            <p>Vehicle: {vehicle.name ?? '-'}</p>
            <p>Vehicle No: {vehicle.vehicleNo ?? '-'}</p>
            <p>Rental days: {rentalDays}</p>
            <p>Rent per day: {rentPerDay}</p>
            <p>Discount: {rent.discount ?? '-'}%</p>
            <h3>Total Amount: {totalAmount}</h3>
            <h3>Approved By: {staff.userName ?? '-'}</h3>

            <button onClick={handleDamageRequest}>
              Do you have any damage?
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Bill;
