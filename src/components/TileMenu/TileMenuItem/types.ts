export const tileMenuItemPropView = ['card', 'default'] as const;
export type TileMenuItemPropView = (typeof tileMenuItemPropView)[number];

export type TileMenuItemProps = {
  image?: string | React.FC;
  title: string;
  description?: string;
  view?: TileMenuItemPropView;
};
