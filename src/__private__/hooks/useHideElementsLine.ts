import { createRef, useMemo, useRef } from 'react'

import { useResizeObserved } from '@consta/uikit/useResizeObserved'
import { useComponentSize } from '@consta/uikit/useComponentSize'

const useCreateRefs = <ELEMENT extends HTMLElement>(items: unknown[]) =>
  useMemo(() => new Array(items.length + 1).fill(null).map(() => createRef<ELEMENT>()), [items])

type ItemDimensions = {
  size: number
  gap: number
}

export const useHideElementsLine = <
  ELEMENT extends HTMLElement,
  WRAPPER_ELEMENT extends HTMLElement,
  ITEM
>(
  items: ITEM[]
): {
  visibleItems: ITEM[]
  hiddenItems: ITEM[]
  itemsRefs: Array<React.RefObject<ELEMENT>>
  wrapperRef: React.RefObject<WRAPPER_ELEMENT>
  moreRef: React.RefObject<ELEMENT> | undefined
} => {
  const refs = useCreateRefs<ELEMENT>(items)
  const wrapperRef = useRef<WRAPPER_ELEMENT>(null)
  const wrapperWidth = useComponentSize(wrapperRef).width
  const itemsRefs = [...refs]
  const moreRef = itemsRefs.pop()

  const itemsDimensions = useResizeObserved(
    refs,
    (el): ItemDimensions => {
      return {
        size: el?.offsetWidth || 0,
        gap: el ? parseInt(getComputedStyle(el).marginRight, 10) : 0,
      }
    }
  )

  const visibleItems: ITEM[] = []
  const hiddenItems: ITEM[] = []

  if (wrapperWidth) {
    let calcWidth = itemsDimensions[itemsDimensions.length - 1]?.size || 0

    for (let index = 0; index < itemsDimensions.length; index++) {
      calcWidth = calcWidth + itemsDimensions[index].size + itemsDimensions[index].gap

      if (calcWidth >= wrapperWidth) {
        items[index] && hiddenItems.push(items[index])
        continue
      }
      visibleItems.push(items[index])
    }
  }

  return { visibleItems, hiddenItems, itemsRefs, wrapperRef, moreRef }
}
