export interface Comment {
    id: string;
    author: string;
    avatar: string;
    content: string;
    likes: number;
    date: string;
    repplies?: Comment[];
}