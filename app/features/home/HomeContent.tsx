import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { StyledText } from '../../components/StyledComponents';

type HomeContentProps = {
    title: string;
};

function HomeContent(props: HomeContentProps): ReactElement {
    const { title } = props;

	return (
        <View>
            <StyledText className="text-emerald-500 font-[Roboto-Black]">
                {title}
            </StyledText>
        </View>
	);
}

export default HomeContent;
