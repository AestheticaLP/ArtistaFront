import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { StyledText } from '../../components/StyledComponents';

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
