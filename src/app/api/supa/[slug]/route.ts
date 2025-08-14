import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

export async function GET(_req: Request, ctx: { params:Promise<{ slug: string }>}) {
    const { slug } = await ctx.params;

    const { data: pageData, error: pageError } = await supabase
        .from("content")
        .select("*")
        .eq("type", "subpage")
        .eq("slug", slug)
        .single();

    if (pageError) {
        return NextResponse.json({ error: pageError.message }, { status: 500 });
    }

    let extras = null;

    if (slug === "get-in-touch") {
        const { data: extraImages, error: extrasError } = await supabase
            .from("content")
            .select("*")
            .eq("type", "contact-extra");
        
        if (extrasError) {
            return NextResponse.json({ error: extrasError.message }, { status: 500 });
        }

        extras = extraImages;
    }

    return NextResponse.json({ pageData, extras });
}