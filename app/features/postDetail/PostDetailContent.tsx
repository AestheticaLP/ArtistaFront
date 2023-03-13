/* eslint-disable no-unused-vars */
import React, { ReactElement, useState } from 'react';
import { Image, Text, View, Dimensions } from 'react-native';
import Button from '../../components/Button';
import ProfilePreview from '../../components/ProfilePreview';
import { StyledView, StyledImage, StyledText } from '../../components/StyledComponents';
import TitleMedium from '../../components/Text/TitleMedium';
import Divider from '../../components/Divider';
import texts from '../../localized_strings/strings';

type PostProps = {
    username: string;
    location: string;
    imageUrl: string | null,
    title: string;
    description: string;
}

function PostDetailContent(props: PostProps): ReactElement {
    const {
        username,
        location,
        imageUrl,
        title,
        description,
    } = props;

    return (
        <StyledView className="space-y-2 content-center">
            <StyledView className="flex flex-row justify-between my-2">
                <ProfilePreview
                    name={username}
                    position="Beziers, Connecticut"
                    pfp="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
                />
                <Button content="Suivre" onPress={() => { }} type="primary" />
            </StyledView>
            <StyledView className="py-2 width-full max-h-[450px]">
                <StyledImage
                    resizeMode="cover"
                    className="w-full h-full"
                    source={{ uri: imageUrl || '' }}
                />
            </StyledView>
            <StyledView className="pb-2">
                <TitleMedium text={title} />
            </StyledView>
            <Divider />
            <StyledView className="pb-2">
                <TitleMedium text={texts.description} />
                <StyledText className="text-neutral-900 font-[Roboto-Regular] text-sm pb-1">{description}</StyledText>
            </StyledView>
            <Divider />
        </StyledView>
    );
}

export default PostDetailContent;
