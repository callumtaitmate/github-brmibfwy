import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req){

    const cookieStore = cookies();
    const supabase = createRouteHandlerClient({cookies: () => cookieStore})

    const {searchParams} = new URL(req.url)

    const code = searchParams.get('code')

    //if (code) <- add back in the future instead of the try as
    //you're not actually verifying the email token passed back.
    try {
        await supabase.auth.exchangeCodeForSession(code)
    }  catch (error) {}

    return NextResponse.redirect(new URL('/todos', req.url))
}