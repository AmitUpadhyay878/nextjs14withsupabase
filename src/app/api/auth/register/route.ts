import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){

    const url = new URL(req.url)

    const cookieStore = cookies()

    const formData = await req.formData()
    const email = String(formData.get("email"))
    const password = String(formData.get("password"))

    const supabase = createRouteHandlerClient({
            cookies:()=>cookieStore 
    })


    try{
        const {data, error}  = await supabase
    .auth
    .signUp({
        email,password,
        options:{
            emailRedirectTo:`${url.origin}/auth/callback`
        }
    })


        // Check for errors in the sign-up process
        if (error) {
            console.error("Sign-up error:", error.message);
            return NextResponse.json({ error: error.message }, { status: 400 });
        }

        // Handle case where user is null
        if (data.user === null) {
            console.error("User is null after sign-up.");
            return NextResponse.json({ error: "User could not be created." }, { status: 400 });
        }

        // Redirect on successful sign-up
        return NextResponse.redirect(url.origin, { status: 301 });

    }catch (err) {
        console.error("Unexpected error:", err);
        return NextResponse.json({ error: "An unexpected error occurred." }, { status: 500 });
    }

        
}