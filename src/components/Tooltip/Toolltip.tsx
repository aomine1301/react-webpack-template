import Tippy, { TippyProps } from '@tippyjs/react'
import React, { FC, PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  tooltipProps?: TippyProps
}

const Tooltip: FC<Props> = ({ tooltipProps }) => {
  return <Tippy zIndex={1000} placement={'top'} content={tooltipProps?.content ? tooltipProps.content : 'FAKC'} {...tooltipProps}></Tippy>
}

export default Tooltip
