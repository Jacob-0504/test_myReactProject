export type WebsiteCategory = 'Game' | 'Music';

export interface Website {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  createdAt: Date;
  category: WebsiteCategory;
}
