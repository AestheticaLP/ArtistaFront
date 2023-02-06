import { styled } from 'nativewind';
import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';

const StyledText = styled(Text);

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
