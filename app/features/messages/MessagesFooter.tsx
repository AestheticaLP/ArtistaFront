import { styled } from 'nativewind';
import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';

const StyledText = styled(Text);

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
