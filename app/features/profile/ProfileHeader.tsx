import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { StyledText } from '../../components/StyledComponents';

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
