'use client';
import { useState, type FormEvent } from 'react';
import { whatsappUrl } from '@/config/contact';
export function Newsletter() {
  const [complete, setComplete] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const city = String(new FormData(e.currentTarget).get('city') || '').trim();
    window.open(
      whatsappUrl(`higienização ou impermeabilização em ${city}`),
      '_blank',
      'noopener,noreferrer',
    );
    setComplete(true);
  }
  return (
    <div className="footer-newsletter">
      <h2>Consulte sua região</h2>
      <form onSubmit={submit}>
        <label className="tw:sr-only" htmlFor="newsletter-email">
          Cidade e bairro
        </label>
        <input
          id="newsletter-email"
          name="city"
          type="text"
          autoComplete="address-level2"
          placeholder="Cidade e bairro"
          required
        />
        <button type="submit">Consultar</button>
      </form>
      <small className="demo-note">
        Converse com a equipe para confirmar o atendimento.
      </small>
      {complete && <p role="status">Continue sua consulta no WhatsApp.</p>}
    </div>
  );
}
