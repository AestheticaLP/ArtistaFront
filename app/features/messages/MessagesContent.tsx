import { styled } from 'nativewind';
import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';

const StyledText = styled(Text);

type MessagesContentProps = {
    title: string;
};

function MessagesContent(props: MessagesContentProps): ReactElement {
    const { title } = props;

	return (
        <View>
            <StyledText className="text-emerald-500">
                {title}
            </StyledText>
        </View>
	);
}

export default MessagesContent;
