import { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { getVanById } from '../../api';
import './VanDetail.css';

export default function VanDetail() {
  const { id } = useParams();
  const [van, setVan] = useState(null);
  const { state } = useLocation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadVan() {
      setLoading(true);
      try {
        const data = await getVanById(id);
        setVan(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVan();
  }, [id]);

  const search = state.search ? `?${state.search}` : '';
  const backBtnTxt = !state.search.includes('type')
    ? 'all'
    : state.search
        .split('&')
        .find((el) => el.startsWith('type='))
        .replace('type=', '');

  const vanElement = (
    <div className="van-details">
      {loading ? <h2>Loading...</h2> : ''}
      {error ? <h2>Error: {error.message}</h2> : ''}
      {van ? (
        <>
          <img src={van.imageUrl} alt={`${van.name} picture`} />
          <div className={`van-type ${van.type}`}>{van.type}</div>
          <h1>{van.name}</h1>
          <p className="van-price">${van.price}</p>
          <p>{van.description}</p>
          <button className="rent-van-btn">Rent this van</button>
        </>
      ) : (
        ''
      )}
    </div>
  );

  return (
    <main className="van-details-page">
      <div className="content">
        ←{' '}
        <Link className="back" to={`..${search}`} relative="path">
          Back to {backBtnTxt} vans
        </Link>
        {vanElement}
      </div>
    </main>
  );
}
