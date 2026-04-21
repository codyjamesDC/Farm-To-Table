import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export default function Root() {

  return (
    <>
      <section>
        <h2>Test</h2>
      </section>

      <section>
        <ul>
          <li><Link to='/home'>Home</Link></li>
        </ul>
      </section>
      <Outlet />
    </>
  )
}