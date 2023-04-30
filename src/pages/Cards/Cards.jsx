import { fetchAllUsers } from 'components/ApiService';
import { useState, useEffect } from 'react';
import Card from 'components/Card';
import { useLocation } from 'react-router-dom';

const Cards = () => {
  const [userList, setUserList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const responce = fetchAllUsers();
    responce.then(res => setUserList(res));
  }, []);

  return <Card users={userList} state={{ from: location }} />;
};

export default Cards;
