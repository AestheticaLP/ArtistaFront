import React, { ReactElement } from 'react';

import { StyledText } from '../StyledComponents';

type TitleProps = {
    text: string;
}

function TitleMedium(props: TitleProps): ReactElement {
    const { text } = props;

	return (
        <StyledText className="text-xl text-neutral-900 font-[Roboto-Regular]">{text}</StyledText>
    );
}

export default TitleMedium;
