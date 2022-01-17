import React from 'react'

import { User } from '@consta/uikit/User'
import { Button } from '@consta/uikit/Button'

type HeaderLoginProps = {
  href?: string
  className?: string
  userName?: string
  userAvatar?: string
  userInfo?: string
  userLogined?: boolean
  onLoginButtonClick?: React.MouseEventHandler
  onUserClick?: React.MouseEventHandler
  loginButtonLabel?: string
}

type HeaderLoginComponent = (props: HeaderLoginProps) => React.ReactElement | null

export const HeaderLogin: HeaderLoginComponent = props => {
  const {
    href,
    className,
    userName,
    userAvatar,
    userInfo,
    userLogined,
    onLoginButtonClick,
    onUserClick,
    loginButtonLabel,
  } = props

  if (userLogined && (userName || userAvatar)) {
    return (
      <User
        name={userName}
        avatarUrl={userAvatar}
        className={className}
        info={userInfo}
        onClick={onUserClick}
        size="l"
        {...(href && { href, as: 'a' })}
      />
    )
  }

  if (loginButtonLabel) {
    return <Button className={className} label={loginButtonLabel} onClick={onLoginButtonClick} />
  }

  return null
}
