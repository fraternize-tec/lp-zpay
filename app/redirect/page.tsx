'use client';

import { useEffect } from 'react';

export default function RedirectPage() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    // tipo do fluxo (Supabase manda "type")
    const type = params.get('type');

    let path = 'login';

    if (type === 'recovery') path = 'reset-password';
    if (type === 'magiclink') path = 'login';
    if (type === 'invite') path = 'invite';

    const deepLink = `zpay://${path}?${params.toString()}`;

    console.log('Params:', params.toString());
    console.log('Deep link:', deepLink);

    // tenta abrir o app
    window.location.href = deepLink;

    // fallback (caso não abra)
    const timeout = setTimeout(() => {
      document.body.innerHTML = `
        <div style="font-family: sans-serif; text-align: center; padding: 40px;">
          <h2>Abrir no app</h2>
          <p>Se o app não abriu automaticamente:</p>
          <a href="${deepLink}" style="color: blue; font-size: 18px;">
            Clique aqui para abrir
          </a>
        </div>
      `;
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: 100 }}>
      <h2>Redirecionando...</h2>
      <p>Aguarde, estamos abrindo o app.</p>
    </div>
  );
}