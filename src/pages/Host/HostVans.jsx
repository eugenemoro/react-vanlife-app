import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HostVans.css';
import { getHostVans } from '../../api';

export default function HostVans() {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getHostVans();
        setVans(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, []);

  const vanElements = vans.map((van) => {
    return (
      <div className="host-van-tile" key={van.id}>
        <Link to={van.id}>
          <img src={van.imageUrl} alt={`${van.name} picture`} />
          <div className="van-tile-name">
            <p>{van.name}</p>
            <p className="van-price">${van.price}</p>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <>
      <h1>Your listed vans</h1>
      {loading ? <h2>Loading...</h2> : ''}
      {error ? <h2>Error: {error.message}</h2> : ''}
      {vanElements ? vanElements : ''}
    </>
  );
}
