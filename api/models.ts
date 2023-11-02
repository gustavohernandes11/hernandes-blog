export type IArticlePreview = {
    title: string;
    description: string;
    date: string;
    category: string;
    slug: string;
};

export type IArticle = {
    title: string;
    description: string;
    date: string;
    category: string;
    content: string;
    meta: IMeta;
};

export type IMeta = {
    title: string;
    description: string;
    keywords: string;
};
export type IPagination = {
    totalDocs: string;
    limit: string;
    totalPages: string;
    page: string;
    hasPrevPage: string;
    hasNextPage: string;
};
