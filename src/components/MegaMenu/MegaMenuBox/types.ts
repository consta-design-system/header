import { PropsWithHTMLAttributesAndRef } from '##/utils/types/PropsWithHTMLAttributes';

export type MegaMenuBoxProps = PropsWithHTMLAttributesAndRef<
  {
    offset?: number;
    isOpen?: boolean;
    onClickOutside?: (event: MouseEvent) => void;
    onEsc?: (event: KeyboardEvent) => void;
    anchorRef?: React.RefObject<HTMLElement>;
    maxContentWidth?: number;
  },
  HTMLDivElement
>;
