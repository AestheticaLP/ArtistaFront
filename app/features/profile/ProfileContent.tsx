import React, { ReactElement } from 'react';
import ProfilePreview from '../../components/ProfilePreview';
import { StyledView } from '../../components/StyledComponents';

function ProfileContent(): ReactElement {
    return (
        <StyledView>
            <ProfilePreview name="Enzo le zozo" position="Bezziers, Connecticut" pfp="https://reactnative.dev/img/tiny_logo.png" />
        </StyledView>
	);
}

export default ProfileContent;
