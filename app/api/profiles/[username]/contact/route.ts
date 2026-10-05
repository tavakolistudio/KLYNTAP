import { getPublicProfile } from '@/lib/profiles';

export async function GET(_: Request, { params }: { params: Promise<{ username: string }> }) {
  const profile = getPublicProfile((await params).username);
  if (!profile?.vCard) return new Response('Profile not found', { status: 404 });

  const card = profile.vCard;
  const vCard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${card.familyName ?? ''};${card.givenName ?? ''};;;`,
    `FN:${card.fullName}`,
    card.title && `TITLE:${card.title}`,
    ...(card.phones ?? []).map((phone) => `TEL;TYPE=${phone.type}:${phone.value}`),
    ...(card.urls ?? []).map((url) => `URL:${url}`),
    'END:VCARD',
  ].filter(Boolean).join('\r\n');

  return new Response(vCard, { headers: { 'Content-Type': 'text/vcard; charset=utf-8', 'Content-Disposition': `attachment; filename="${card.filename}"` } });
}
