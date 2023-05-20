import { BlogsType } from "@/interfaces/blogs.interface";
import { request, gql } from "graphql-request";
const graphAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string;
export const BlogService = {
  async getAllBlogs() {
    const query = gql`
      query GetBlogs {
        blogs {
          excerpt
          id
          image {
            url
          }
          title
          slug
          author {
            name
            image {
              url
            }
          }
          category {
            label
            slug
          }
          description {
            text
            html
          }
          createdAt
        }
      }
    `;
    const result = await request<{ blogs: BlogsType[] }>(graphAPI, query);
    return result.blogs;
  },
  async getLatestBlogs() {
    const query = gql`
      query GetLatestBlogs {
        blogs(last: 2) {
          id
          image {
            url
          }
          title
          slug
          author {
            name
            image {
              url
            }
          }
          createdAt
          description {
            text
            html
          }
        }
      }
    `;
    const result = await request<{ blogs: BlogsType[] }>(graphAPI, query);
    return result.blogs;
  },
  async getBlogBySlug(slug: string) {
    const query = gql`
      query GetBlogBySlug($slug: String) {
        blog(where: { slug: $slug }) {
          excerpt
          id
          image {
            url
          }
          title
          slug
          author {
            name
            image {
              url
            }
          }
          category {
            label
            slug
          }
          description {
            html
            text
          }
          createdAt
        }
      }
    `;
    const result = await request<{ blog: BlogsType }>(graphAPI, query, {
      slug,
    });
    return result.blog;
  },
  async getBlogByCategorySlug(slug: string) {
    const query = gql`
      query MyQuery($slug: String = "") {
        blogs(where: { category: { slug: $slug } }) {
          id
          image {
            url
          }
          title
          slug
          author {
            name
            image {
              url
            }
          }
          createdAt
          description {
            text
            html
          }
        }
      }
    `;
    const result = await request<{ blogs: BlogsType[] }>(graphAPI, query, {
      slug,
    });
    return result.blogs;
  },
};
