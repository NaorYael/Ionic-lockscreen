export interface NewsData {

  status: string;
  articles: [
    {
      author: string;
      title: string;
      description: string;
      url: string;
      publishedAt: string;
      content: string;
    }
  ];
}
