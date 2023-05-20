export interface BlogsType {
  excerpt: string;
  id: string;
  image: {
    url: string;
  };
  title: string;
  slug: string;
  author: {
    name: string;
    image: {
      url: string;
    };
  };
  category: {
    label: string;
    slug: string;
  };
  createdAt: Date;
  description: {
    text: string;
    html: string;
  };
}
