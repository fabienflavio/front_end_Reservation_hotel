import { Link, useLocation } from 'react-router-dom';
import { dataMenu } from './dataMenu';

export default function Menu() {
    const {pathname} = useLocation()
  return (
    <>
        {
            dataMenu.map(  (items) => (<Link className={`  ${pathname === items.path &&  "underline font-semibold "} border-2 px-4 py-2 hover:font-semibold `} to={items.path}> {items.label} </Link>)  )
        }
    </>
  )
}