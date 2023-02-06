import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { StyledText } from '../../components/StyledComponents';

type MessagesFooterProps = {
    title: string;
};

function MessagesFooter(props: MessagesFooterProps): ReactElement {
    const { title } = props;

	return (
        <View>
            <StyledText className="text-blue-500">
                {title}
            </StyledText>
        </View>
	);
}

export default MessagesFooter;
