import { useOutletContext } from 'react-router-dom';

export default function Pricing() {
  const van = useOutletContext();

  return <p className="host-van-pricing">${van.price}</p>;
}
