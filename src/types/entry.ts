import { MetaProps } from "@/components/common/meta";
import { BlockProps } from "@/components/blocks/display-blocks";

export interface EntryProps {
  id: number;
  meta: MetaProps;
  title: string;
  description?: string;
  slug: string;
  blocks: BlockProps[];
}
