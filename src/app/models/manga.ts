export interface Manga {
    request_hash: string;
    request_cached: boolean;
    request_cache_expiry: number;
    mal_id: number;
    url: string;
    title: string;
    title_english: string;
    title_synonyms: [string];
    title_japanese: string;
    status: string;
    image_url: string;
    type: string;
    volumes: any;
    chapters: any;
    publishing: boolean;
    published: {};
    rank: number;
    score: number;
    scored_by: number;
    popularity: number;
    members: number;
    favorites: number;
    synopsis: string;
    background: string;
    related: {};
    genres: [{}];
    explicit_genres: [];
    demographics: [{}];
    themes: [{}];
    authors: [{}];
    serializations: [{}];
    external_links: [{}]
}