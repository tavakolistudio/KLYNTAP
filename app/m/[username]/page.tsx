import { notFound } from 'next/navigation';
import { PublicProfilePage } from '@/components/public-profile';
import { getPublicProfile } from '@/lib/profiles';

const reserved = ['admin', 'dashboard', 'login', 'api', 'n', 'urun', 'products', 'support', 'settings'];

export default async function Profile({ params }: { params: Promise<{ username: string }> }) {
  const { username } = await params;
  if (reserved.includes(username.toLowerCase())) notFound();
  const profile = getPublicProfile(username);
  if (!profile) notFound();
  return <PublicProfilePage profile={profile}/>;
}
