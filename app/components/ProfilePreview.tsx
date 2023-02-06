import React, { ReactElement } from 'react';
import { StyledView, StyledImage, StyledText } from './StyledComponents';

type ProfilePreviewProps = {
    name: string;
    position: string;
    pfp: string;
};

function ProfilePreview(props: ProfilePreviewProps): ReactElement {
    const { name, position, pfp } = props;

    return (
        <StyledView className="flex-row items-center gap-x-2">
            <StyledImage
                className="w-8 h-8 rounded-full"
                source={{ uri: pfp }}
            />
            <StyledView className="flex-col">
                <StyledText className="text-neutral-900 font-[Roboto-Regular] text-sm">
                    {name}
                </StyledText>
                <StyledText className="text-gray-400 font-[Roboto-Regular} text-xs">
                    {position}
                </StyledText>
            </StyledView>
        </StyledView>
    );
}

export default ProfilePreview;
