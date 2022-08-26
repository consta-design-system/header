export type GetItemOnClick<ITEM> = (
  item: ITEM,
) => React.EventHandler<React.MouseEvent> | undefined;
export type OnItemClick<ITEM> = (props: {
  e: React.MouseEvent;
  item: ITEM;
}) => void;

export const getItemClick =
  <ITEM>(
    item: ITEM,
    getItemOnClick: GetItemOnClick<ITEM>,
    onItemClick?: OnItemClick<ITEM>,
  ): React.MouseEventHandler =>
  (e) => {
    onItemClick?.({ e, item });
    getItemOnClick(item)?.(e);
  };
