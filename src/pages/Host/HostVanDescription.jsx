import { useOutletContext } from 'react-router-dom';

export default function Description() {
  const van = useOutletContext();

  return (
    <>
      <p>
        <strong>Name: </strong>
        {van.name}
      </p>
      <p>
        <strong>Category: </strong>{' '}
        <span style={{ textTransform: 'capitalize' }}>{van.type}</span>
      </p>
      <p>
        <strong>Description: </strong> {van.description}
      </p>
      <p>
        <strong>Visibility: </strong> Public
      </p>
    </>
  );
}
