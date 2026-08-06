import HomePage from './pages/home';
import RsvpPage from './pages/rsvp';

export default function App() {
  const rsvpToken = new URLSearchParams(window.location.search).get('token');

  if (window.location.pathname === '/confirmar') {
    return <RsvpPage />;
  }

  return <HomePage rsvpToken={rsvpToken} />;
}
