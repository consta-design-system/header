import React from 'react'

import { Text } from '@consta/uikit/Text'

type HeaderLogoProps = { logo: React.ReactNode; href?: string; className?: string }

type HeaderLogoComponent = (props: HeaderLogoProps) => React.ReactElement | null

export const HeaderLogo: HeaderLogoComponent = props => {
  const { logo, href, className } = props

  if (!logo) {
    return null
  }

  if (typeof logo === 'string' || typeof logo === 'number') {
    return (
      <Text className={className} size="l" weight="bold" {...(href && { as: 'a', href })}>
        {logo}
      </Text>
    )
  }

  const Tag = href ? 'a' : 'div'

  return (
    <Tag className={className} href={href}>
      {logo}
    </Tag>
  )
}
