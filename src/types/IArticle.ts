import { IMeta } from "./IMeta";

export type IArticle = {
    title: string;
    description: string;
    date: string;
    category: string;
    content: string;
    meta: IMeta;
};
