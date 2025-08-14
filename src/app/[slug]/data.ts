import type { SubPage, ContactExtra } from "@/types/type";

export const getSubpageData = async (slug: string): Promise<{ pageData: SubPage; extras: ContactExtra[] | null }> => {
    const res = await fetch(`http://localhost:3000/api/supa/${slug}`, { cache: "no-store" });

    if (!res.ok) throw new Error("failed");

    return res.json();
}