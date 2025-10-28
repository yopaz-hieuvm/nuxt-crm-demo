export type Product = {
  id?: number | null;
  title?: string | null;
  slug?: string | null;
  price?: number | null;
  description?: string | null;
  category?: {
    id?: number | null;
    name?: string | null;
    image?: string | null;
    slug?: string | null;
  };
  images?: string[] | null;
};
