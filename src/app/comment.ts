export interface Comment {
    id: number;
    author: string;
    text: string;
    vote: number;
    comment_chain: Comment[];
}