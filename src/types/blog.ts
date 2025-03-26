export interface BlogPost {
  id: string;
  title: string;
  date: string;
  author: string;
  category: string;
  image: string;
  introduction: string;
  keyTakeaways: string[];
  content: string;
  ctaText: string;
  ctaLink: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  description: string;
}