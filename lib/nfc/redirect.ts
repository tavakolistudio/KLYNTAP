/** Server-side NFC redirect contract. Keep these fields minimal; do not persist IP addresses. */
export type TapEventInput={cardId:string;deviceType?:string;userAgent?:string;referrer?:string;country?:string;city?:string};
export function getDeviceType(userAgent:string|undefined){if(!userAgent)return 'unknown';return /mobile|android|iphone/i.test(userAgent)?'mobile':'desktop'}
export function safeRedirectTarget(target:string){const url=new URL(target);if(!['http:','https:'].includes(url.protocol))throw new Error('Unsupported target');return url.toString()}
