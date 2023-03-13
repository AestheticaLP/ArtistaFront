import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { StyledText } from '../../components/StyledComponents';

type HomeHeaderProps = {
    title: string;
};

function HomeHeader(props: HomeHeaderProps): ReactElement {
    const { title } = props;

	return (
        <View>
            <StyledText className="text-red-500">
                {title}
            </StyledText>
        </View>
	);
}

export default HomeHeader;
