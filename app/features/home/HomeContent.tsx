import React, { ReactElement, useState } from 'react';

import { StyledText, StyledView } from '../../components/StyledComponents';
import CheckBox from '../../components/CheckBox';

type HomeContentProps = {
    title: string;
};

function HomeContent(props: HomeContentProps): ReactElement {
    const { title } = props;

    const [checked, setChecked] = useState(false);
    const [checked2, setChecked2] = useState(false);

	return (
        <StyledView className="px-20">
            <StyledText className="text-emerald-500 font-[Roboto-Black]">
                {title}
            </StyledText>
            <StyledText className={`
                    font-[Roboto-Black]
                    ${checked ? 'text-emerald-500' : 'text-red-500'}
                `}
            >
                {checked ? 'Checked' : 'Unchecked'}
            </StyledText>
            <CheckBox checked={checked} rounded onPress={() => setChecked(!checked)} />
            <StyledText className={`
                    font-[Roboto-Black]
                    ${checked2 ? 'text-emerald-500' : 'text-red-500'}
                `}
            >
                {checked2 ? 'Checked' : 'Unchecked'}
            </StyledText>
            <CheckBox checked={checked2} onPress={() => setChecked2(!checked2)} />
        </StyledView>
	);
}

export default HomeContent;
