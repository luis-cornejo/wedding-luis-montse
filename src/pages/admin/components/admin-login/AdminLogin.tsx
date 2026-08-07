import { useState } from 'react';

import { adminCopy } from '../../../../application/content/admin';

import { Field, LoginForm, Message, SubmitButton } from './AdminLogin.styled';

type Props = {
  onRequestLogin: (email: string) => Promise<boolean>;
};

export default function AdminLogin({ onRequestLogin }: Props) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'error' | 'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');
    setStatus((await onRequestLogin(email.trim())) ? 'sent' : 'error');
  };

  return (
    <LoginForm onSubmit={handleSubmit}>
      <h1>{adminCopy.loginTitle}</h1>
      <p>{adminCopy.loginDescription}</p>
      <Field>
        {adminCopy.email}
        <input
          autoComplete="email"
          onChange={(event) => setEmail(event.target.value)}
          required
          type="email"
          value={email}
        />
      </Field>
      <SubmitButton disabled={status === 'sending'} type="submit">
        {adminCopy.loginSubmit}
      </SubmitButton>
      {status === 'sent' && <Message>{adminCopy.loginSent}</Message>}
      {status === 'error' && <Message $isError>{adminCopy.loginError}</Message>}
    </LoginForm>
  );
}
