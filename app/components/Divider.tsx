/* eslint-disable no-nested-ternary */
import React, { ReactElement } from 'react';
import { StyledView } from './StyledComponents';

type DividerProps = {
    tailwindColor?: string
}

function Divider(props: DividerProps): ReactElement {
    const { tailwindColor } = props;

	return (
        <StyledView className={`bg-${tailwindColor || 'purple-400'} h-0.5 w-full`} />
    );
}

export default Divider;
