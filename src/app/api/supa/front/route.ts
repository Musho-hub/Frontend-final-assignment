import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

import type { FrontPage } from "@/types/type";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

export async function GET() {
    const { data, error } = await supabase
        .from('content')
        .select('id, img, slug')
        .eq('type', 'frontpage')
        .order('id');

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json<{ data: FrontPage[] }>({ data });
}