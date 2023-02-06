import { styled } from 'nativewind';
import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';

const StyledText = styled(Text);

type MessagesHeaderProps = {
    title: string;
};

function MessagesHeader(props: MessagesHeaderProps): ReactElement {
    const { title } = props;

	return (
        <View>
            <StyledText className="text-red-500">
                {title}
            </StyledText>
        </View>
	);
}

export default MessagesHeader;
