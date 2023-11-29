'use client'
import { useRouter } from 'next/navigation';

export function useIsAuthPath(authPaths) {
    const location = useRouter();
    return authPaths.some(path => location?.pathname?.includes(path));
}