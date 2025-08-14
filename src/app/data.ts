import type { FrontPage, Logo } from "@/types/type";

export const getFrontData = async (): Promise<{ data: FrontPage[] }> => {
    const res = await fetch('http://localhost:3000/api/supa/front', {cache: 'no-store'});

    if (!res.ok) throw new Error('failed');

    return res.json();
};

export const getLogoData = async (): Promise<{ data: Logo }> => {
    const res = await fetch('http://localhost:3000/api/supa/logo', {cache: 'no-store'});

    if (!res.ok) throw new Error('failed');

    return res.json();
}