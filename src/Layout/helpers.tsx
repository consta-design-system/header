import { LayoutRow } from './types'

const hasProperty = Object.prototype.hasOwnProperty

export const LayoutRowIsObject = (content: React.ReactNode | LayoutRow): content is LayoutRow => {
  if (
    content &&
    typeof content === 'object' &&
    (hasProperty.call(content, 'left') ||
      hasProperty.call(content, 'right') ||
      hasProperty.call(content, 'center'))
  ) {
    return true
  }
  return false
}
