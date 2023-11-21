'use client'
import { useRouter } from 'next/router';

export function useIsAuthPath(authPaths) {
    //   const location = useRouter();
    return false// authPaths.some(path => location.pathname.includes(path));
}