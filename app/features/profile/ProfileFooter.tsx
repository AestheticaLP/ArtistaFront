import { styled } from 'nativewind';
import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';

const StyledText = styled(Text);

type ProfileFooterProps = {
    title: string;
};

function ProfileFooter(props: ProfileFooterProps): ReactElement {
    const { title } = props;

	return (
        <View>
            <StyledText className="text-blue-500">
                {title}
            </StyledText>
        </View>
	);
}

export default ProfileFooter;
