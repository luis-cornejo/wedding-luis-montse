import { useEffect, useState } from 'react';

import { adminCopy } from '../../application/content/admin';
import GlobalStyle from '../../application/styles/GlobalStyle';
import {
  getAdminEmail,
  getAdminRsvpOverview,
  isCurrentUserAdmin,
  requestAdminLoginLink,
  signOutAdmin,
  type AdminRsvpOverview,
} from '../../common/api-connector';

import { BackLink, Notice, Page, Unauthorized } from './AdminPage.styled';
import AdminDashboard from './components/admin-dashboard';
import AdminLogin from './components/admin-login';

type Status = 'loading' | 'ready' | 'signed-out' | 'unauthorized';

export default function AdminPage() {
  const [email, setEmail] = useState<string | null>(null);
  const [overview, setOverview] = useState<AdminRsvpOverview | null>(null);
  const [status, setStatus] = useState<Status>('loading');

  useEffect(() => {
    let isActive = true;

    void getAdminEmail().then(async (currentEmail) => {
      if (!isActive) {
        return;
      }

      if (!currentEmail) {
        setStatus('signed-out');
        return;
      }

      const isAdmin = await isCurrentUserAdmin();
      if (!isActive) {
        return;
      }

      if (!isAdmin) {
        setEmail(currentEmail);
        setStatus('unauthorized');
        return;
      }

      const currentOverview = await getAdminRsvpOverview();
      if (!isActive) {
        return;
      }

      if (!currentOverview) {
        setStatus('unauthorized');
        return;
      }

      setEmail(currentEmail);
      setOverview(currentOverview);
      setStatus('ready');
    });

    return () => {
      isActive = false;
    };
  }, []);

  const handleSignOut = async () => {
    await signOutAdmin();
    setEmail(null);
    setOverview(null);
    setStatus('signed-out');
  };

  const refreshOverview = async () => {
    const currentOverview = await getAdminRsvpOverview();
    if (currentOverview) {
      setOverview(currentOverview);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Page>
        <BackLink href="/">Volver a la boda</BackLink>
        {status === 'loading' && <Notice>Cargando acceso...</Notice>}
        {status === 'signed-out' && <AdminLogin onRequestLogin={requestAdminLoginLink} />}
        {status === 'unauthorized' && (
          <Unauthorized>
            <p>{adminCopy.unauthorized}</p>
            {email && <Notice>{email}</Notice>}
          </Unauthorized>
        )}
        {status === 'ready' && email && overview && (
          <AdminDashboard
            email={email}
            onRefresh={refreshOverview}
            onSignOut={handleSignOut}
            overview={overview}
          />
        )}
      </Page>
    </>
  );
}
