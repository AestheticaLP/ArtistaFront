import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { StyledText } from '../../components/StyledComponents';

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
