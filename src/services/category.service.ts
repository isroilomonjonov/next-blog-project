import { CategoriesType } from "@/interfaces/categories.interface";
import { request, gql } from "graphql-request";
const graphAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string;
export const CategoryService = {
  async getAllCategories() {
    const query = gql`
      query GetCategories{
        categories {
          label
          slug
        }
      }
    `;
    const result = await request<{ categories: CategoriesType[] }>(graphAPI, query);
    return result.categories;
  },
};
