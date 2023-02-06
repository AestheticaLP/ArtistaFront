import React, { ReactElement } from 'react';
import { View } from 'react-native';
import ProfileHeader from '../features/profile/ProfileHeader';
import ProfileContent from '../features/profile/ProfileContent';
import ProfileFooter from '../features/profile/ProfileFooter';

function Profile(): ReactElement {
	return (
        <View>
            <ProfileHeader title="Profile Header" />
            <ProfileContent />
            <ProfileFooter title="Profile Footer" />
        </View>
	);
}

export default Profile;
