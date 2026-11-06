/**
 * Service d'envoi des formulaires (Contact & Demande de Devis).
 * Respecte la règle d'intégrité : ne simule jamais un faux succès silencieux
 * si aucun backend/service d'envoi n'est configuré dans les variables d'environnement.
 */
export async function submitInquiry(type, payload) {
  const endpoint =
    type === 'quote'
      ? import.meta.env?.VITE_QUOTE_ENDPOINT
      : import.meta.env?.VITE_CONTACT_ENDPOINT;

  if (!endpoint || endpoint.trim() === '') {
    return {
      ok: false,
      status: 'ENDPOINT_NOT_CONFIGURED',
      message:
        'Service d’envoi externe non configuré (VITE_CONTACT_ENDPOINT / VITE_QUOTE_ENDPOINT). Utilisez la transmission directe par email ou WhatsApp ci-dessous.'
    };
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ type, timestamp: new Date().toISOString(), ...payload })
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return { ok: true, status: 'SENT' };
}
