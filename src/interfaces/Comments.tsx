export interface Comment {
    author: string;
    avatar: string;
    content: string;
    likes: number;
    date: string;
    replies?: Comment[];
}