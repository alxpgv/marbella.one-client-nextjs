import { SEOProps } from "@/components/common/SEO";
import { BlockProps } from "@/components/blocks/display-blocks";
import { ImageProps } from "next/image";

export interface EntryProps {
  id: number;
  meta: SEOProps;
  title: string;
  description?: string;
  slug: string;
  image?: ImageProps;
  blocks: BlockProps[];
}
