import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { getUserById } from "../api";

const User = () => {
  const { userId } = useParams();
  const [user, setUser] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getUserById(userId).then((data) => {
      setUser(data);
      setLoading(false);
    });
  }, [userId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="user">
      <Link to="/users">Back to Users</Link>
      <h2 className="user-title">
        {user.firstName} {user.lastName} ({user.maidenName})
      </h2>
      <img className="user-photo" src={user.image} alt="" />
      <div className="user-block">
        <div className="user-info-main">
          <h3>Physical parameters:</h3>
          <p>age: {user.age}</p>
          <p>birthday: {user.birthDate}</p>
          <p>gender: {user.gender}</p>
          <p>bloodGroup: {user.bloodGroup}</p>
          <p>height: {user.height}</p>
          <p>weight: {user.weight}</p>
          <p>eyeColor: {user.eyeColor}</p>
          <p>hair:</p>
          <p>color: {user.hair.color}</p>
          <p>type: {user.hair.type}</p>
        </div>
        <div className="user-info-contact">
          <h3>Contacts:</h3>
          <a href="mailto: {user.email}">email: {user.email}</a>
          <a href="tel: {user.phone}">phone: {user.phone}</a>
          <address>address: {user.address.address}</address>
          <p>city: {user.address.city}</p>
          <p>post code: {user.address.postalCode}</p>
          <p>state: {user.address.state}</p>
        </div>
        <div className="user-info-bank">
          <h3>Bank info:</h3>
          <p>cardNumber: {user.bank.cardNumber}</p>
          <p>cardExpire: {user.bank.cardExpire}</p>
          <p>cardType: {user.bank.cardType}</p>
          <p>currency: {user.bank.currency}</p>
          <p>iban: {user.bank.iban}</p>
        </div>
        <div className="user-info-company">
          <h3>Company:</h3>
          <address>address: {user.company.address.address}</address>
          <p>city: {user.company.address.city}</p>
          <p>post code: {user.company.address.postalCode}</p>
          <p>state: {user.company.address.state}</p>
          <p>department: {user.company.department}</p>
          <p>name: {user.company.name}</p>
          <p>title: {user.company.title}</p>
        </div>
        <div className="user-info-technical">
          <h3>Technical information:</h3>
          <p>username: {user.username}</p>
          <p>password: {user.password}</p>
          <p>domain: {user.domain}</p>
          <p>ip: {user.ip}</p>
          <p>ein: {user.ein}</p>
          <p>ssn: {user.ssn}</p>
          <p>userAgent: {user.userAgent}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
