export interface NewsData {
    articles: Article[];
}

interface Article {
    author: string,
    title: string,
    description: string,
    url: string,
    publishedAt: string,
    content: string
}
