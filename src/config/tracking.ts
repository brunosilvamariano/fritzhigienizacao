function validId(value: string | undefined, pattern: RegExp, name: string) {
  if (value && !pattern.test(value))
    throw new Error(`${name}: formato inválido.`);
  return value || '';
}

const enabled = process.env.NEXT_PUBLIC_TRACKING_ENABLED === 'true';
export const tracking = {
  enabled,
  ga4: validId(process.env.NEXT_PUBLIC_GA4_ID, /^G-[A-Z0-9]+$/, 'GA4_ID'),
  ads: validId(
    process.env.NEXT_PUBLIC_GOOGLE_ADS_ID,
    /^AW-\d+$/,
    'GOOGLE_ADS_ID',
  ),
  adsLabel: validId(
    process.env.NEXT_PUBLIC_GOOGLE_ADS_CONTACT_LABEL,
    /^[A-Za-z0-9_-]+$/,
    'GOOGLE_ADS_CONTACT_LABEL',
  ),
  meta: validId(
    process.env.NEXT_PUBLIC_META_PIXEL_ID,
    /^\d+$/,
    'META_PIXEL_ID',
  ),
  privacyUrl: process.env.NEXT_PUBLIC_PRIVACY_URL || '',
};
export const trackingAvailable =
  enabled && Boolean(tracking.ga4 || tracking.ads || tracking.meta);
if (
  trackingAvailable &&
  (!tracking.privacyUrl.startsWith('https://') ||
    !URL.canParse(tracking.privacyUrl))
) {
  throw new Error(
    'Configure NEXT_PUBLIC_PRIVACY_URL com a política publicada antes de ativar a medição.',
  );
}
