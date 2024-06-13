// import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
// import { NextRequest, NextResponse } from "next/server";

// export async function middleware(req:NextRequest){

//     const authURL = [
//         "/signin",
//         "/register"
//     ]

//     const res = NextResponse.next()

//     const currentPath = req.nextUrl.pathname;
//     console.log(currentPath, "current path in middleware");

//         const supabase = createMiddlewareClient({req, res})

//         const {data:{session}} = await supabase.auth.getSession()

//         if (!session) {
//             if (authURL.includes(currentPath)) {
//                 // Allow access to the auth URLs if not authenticated
//                 return res;
//             } else {
//                 // Redirect to signin if not authenticated and trying to access a protected page
//                 return NextResponse.rewrite(new URL('/signin', req.url));
//             }
//         } else {
//             if (authURL.includes(currentPath)) {
//                 // Redirect authenticated users away from auth URLs (e.g., to a dashboard)
//                 return NextResponse.rewrite(new URL('/', req.url)); // Change '/dashboard' to your desired authenticated landing page
//             } else {
//                 // Allow access to all other pages
//                 return res;
//             }
//         }

// }

// export const config={
//     matcher:[
//         '/((?!api|_next/static|_next/image|favicon.ico).*)',
//     ]
// }

import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextRequest, NextResponse } from 'next/server'
export async function middleware(req: NextRequest) {
    const authURL = ['/signin', '/register','/forgot-password']

    const res = NextResponse.next()
    const supabase = createMiddlewareClient({ req, res })

    const currentPath = req.nextUrl.pathname

    const {
        data: { session },
        error
    } = await supabase.auth.getSession()

    if (!session) {
        if (authURL.includes(currentPath)) {
            // Allow access to the auth URLs if not authenticated
            return res
        } else {
            // Redirect to signin if not authenticated and trying to access a protected page
            return NextResponse.rewrite(new URL('/signin', req.url))
        }
    } else {
        if (authURL.includes(currentPath)) {
            // Redirect authenticated users away from auth URLs (e.g., to a dashboard)
            return NextResponse.rewrite(new URL('/', req.url)) // Change '/dashboard' to your desired authenticated landing page
        } else {
            // Allow access to all other pages
            return res
        }
    }

    console.log(session, 'session')
    console.log(error, 'error')

    return res
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
