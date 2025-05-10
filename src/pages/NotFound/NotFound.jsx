import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="content">
        <h1>Sorry, the page you were looking for was not found.</h1>
        <Link to="..">
          <button>Return to home</button>
        </Link>
      </div>
    </main>
  );
}
