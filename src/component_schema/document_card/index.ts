import { TagProps } from "../tag";
import { ActionData } from "../types";

export type DocumentCardProps = {
    titleText: string;
    content: string;
    tags: TagProps[];
    tapAction: ActionData
}