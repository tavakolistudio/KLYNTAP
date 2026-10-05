export type ProfileActionKind = 'whatsapp' | 'phone' | 'instagram' | 'website';

export type ProfileAction = {
  label: string;
  value: string;
  href: string;
  kind: ProfileActionKind;
  external?: boolean;
};

export type PublicProfile = {
  username: string;
  name: string;
  accentName?: string;
  role: string;
  locale: 'en' | 'tr';
  actions: ProfileAction[];
  vCard?: {
    filename: string;
    fullName: string;
    familyName?: string;
    givenName?: string;
    title?: string;
    phones?: { value: string; type: 'CELL' | 'VOICE' }[];
    urls?: string[];
  };
};

export const publicProfiles: Record<string, PublicProfile> = {
  sarikhani: {
    username: 'sarikhani',
    name: 'Abbas Sarikhani',
    accentName: 'Sarikhani',
    role: 'Digital Contact Card',
    locale: 'en',
    actions: [
      { label: 'WHATSAPP', value: '05376640379', href: 'https://wa.me/905376640379', kind: 'whatsapp', external: true },
      { label: 'CALL', value: '09368788998', href: 'tel:09368788998', kind: 'phone' },
      { label: 'SECONDARY CALL', value: '09331898040', href: 'tel:09331898040', kind: 'phone' },
      { label: 'INSTAGRAM', value: '@abbas258025', href: 'https://instagram.com/abbas258025', kind: 'instagram', external: true },
    ],
    vCard: {
      filename: 'Abbas-Sarikhani.vcf',
      fullName: 'Abbas Sarikhani',
      familyName: 'Sarikhani',
      givenName: 'Abbas',
      title: 'Digital Contact Card',
      phones: [
        { value: '+905376640379', type: 'CELL' },
        { value: '09368788998', type: 'VOICE' },
        { value: '09331898040', type: 'VOICE' },
      ],
      urls: ['https://instagram.com/abbas258025'],
    },
  },
};

export function getPublicProfile(username: string) {
  return publicProfiles[username.toLowerCase()];
}
