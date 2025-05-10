import { useParams, Link, NavLink, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './HostVanDetail.css';
import { getVanById } from '../../api';

export default function HostVansDetail() {
  const { id } = useParams();
  const [van, setVan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadVans() {
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
    loadVans();
  }, [id]);

  const vanElement = (
    <div className="host-van-details">
      {loading ? <h2>Loading...</h2> : ''}
      {error ? <h2>Error: {error.message}</h2> : ''}
      {van ? (
        <>
          <div className="van-details-header">
            <img src={van.imageUrl} alt={`${van.name} picture`} />
            <div>
              <div className={`van-type ${van.type}`}>{van.type}</div>
              <h1>{van.name}</h1>
              <p className="van-price">${van.price}</p>
            </div>
          </div>
          <nav>
            <NavLink
              to="."
              end
              className={({ isActive }) => (isActive ? 'active' : null)}
            >
              Description
            </NavLink>
            <NavLink
              to="pricing"
              className={({ isActive }) => (isActive ? 'active' : null)}
            >
              Pricing
            </NavLink>
            <NavLink
              to="photos"
              className={({ isActive }) => (isActive ? 'active' : null)}
            >
              Photos
            </NavLink>
          </nav>
          <div className="host-van-content">
            <Outlet context={van} />
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
  return (
    <>
      ←{' '}
      <Link className="back" to=".." relative="path">
        Back to all vans
      </Link>
      {vanElement}
    </>
  );
}
