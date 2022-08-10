import React from 'react'

import { Icon } from '@chakra-ui/react'

type Props = any

export const IconBase: React.FC<Props> = ({ children, ...props }) => (
	<Icon viewBox="0 0 24 24" fill="none" {...props}>
		{children}
	</Icon>
)
