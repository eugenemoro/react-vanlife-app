import { useOutletContext } from 'react-router-dom';

export default function Photos() {
  const van = useOutletContext();
  return <img className="host-van-photos" src={van.imageUrl} alt="Van photo" />;
}
