export interface FrontPage {
    id: number;
    img: string;
    slug: string
}

export interface Logo {
    img: string;
}

export interface SubPage {
    id: number;
    header: string;
    text: string;
    img: string;
}

export interface ContactExtra {
    id: number;
    img: string;
    text: string;
}

export type FrontPageData = { data: FrontPage[] };
export type LogoData = { data: Logo };
export type SubPageData = { pageData: SubPage; extras: ContactExtra[] | null };