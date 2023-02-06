import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { StyledText } from '../../components/StyledComponents';

type HomeFooterProps = {
    title: string;
};

function HomeFooter(props: HomeFooterProps): ReactElement {
    const { title } = props;

	return (
        <View>
            <StyledText className="text-blue-500">
                {title}
            </StyledText>
        </View>
	);
}

export default HomeFooter;
