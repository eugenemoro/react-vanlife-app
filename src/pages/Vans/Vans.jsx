import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getVans } from '../../api';
import './Vans.css';

export default function Vans() {
  const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const typeFilter = searchParams.get('type');

  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVans();
        setVans(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, []);

  const vansDisplayed = typeFilter
    ? vans.filter((van) => van.type.toLowerCase() === typeFilter.toLowerCase())
    : vans;

  const vanElements = vansDisplayed.map((van) => {
    return (
      <div className="van-tile" key={van.id}>
        <Link to={van.id} state={{ search: searchParams.toString() }}>
          <img src={van.imageUrl} alt={`${van.name} picture`} />
          <div className="van-tile-name">
            <p>{van.name}</p>
            <p className="van-price">${van.price}</p>
          </div>
          <div className={`van-type ${van.type}`}>{van.type}</div>
        </Link>
      </div>
    );
  });

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <main className="vans-page">
      <div className="content">
        <h1>Explore our van options</h1>
        <div className="vans-filter">
          <div className="filter-buttons">
            <button
              onClick={() => handleFilterChange('type', 'simple')}
              className={`van-filter-btn simple ${
                typeFilter === 'simple' && 'active'
              }`}
            >
              Simple
            </button>

            <button
              onClick={() => handleFilterChange('type', 'luxury')}
              className={`van-filter-btn luxury ${
                typeFilter === 'luxury' && 'active'
              }`}
            >
              Luxury
            </button>
            <button
              onClick={() => handleFilterChange('type', 'rugged')}
              className={`van-filter-btn rugged ${
                typeFilter === 'rugged' && 'active'
              }`}
            >
              Rugged
            </button>
          </div>
          {typeFilter && (
            <Link className="back" to=".">
              Clear filters
            </Link>
          )}
        </div>
        <div className="all-vans">
          {loading ? <h2>Loading...</h2> : ''}
          {error ? <h2>Error: {error.message}</h2> : ''}
          {vanElements ? vanElements : ''}
        </div>
      </div>
    </main>
  );
}
