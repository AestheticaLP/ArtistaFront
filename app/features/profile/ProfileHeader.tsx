import { styled } from 'nativewind';
import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';

const StyledText = styled(Text);

type ProfileHeaderProps = {
    title: string;
};

function ProfileHeader(props: ProfileHeaderProps): ReactElement {
    const { title } = props;

	return (
        <View>
            <StyledText className="text-red-500">
                {title}
            </StyledText>
        </View>
	);
}

export default ProfileHeader;
