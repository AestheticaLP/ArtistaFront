import React, { ReactElement } from 'react';
import { FlatList, Linking, TouchableOpacity } from 'react-native';
import { StyledImage, StyledView } from '../../components/StyledComponents';
import TitleMedium from '../../components/TitleMedium';
import texts from '../../localized_strings/strings';

type SinglePostPreviewProp = {
    imageUrl: string;
    redirectUrl: string;
}

type PostPreviewProps = {
    postPreviews: Array<SinglePostPreviewProp>;
}

function PostDetailRelatedPosts(props: PostPreviewProps): ReactElement {
    const { postPreviews: posts } = props;

    return (
        <StyledView className="py-1">
            <TitleMedium text={texts.relatedPosts} />
            <FlatList
                horizontal
                data={posts}
                renderItem={({ item }) => (
                    <StyledView className="mr-4 my-2 w-[150px] h-[150px]">
                        <TouchableOpacity onPress={() => Linking.openURL(item.redirectUrl)}>
                            <StyledImage
                                resizeMode="cover"
                                className="w-full h-full rounded-lg"
                                source={{ uri: item.imageUrl }}
                            />
                        </TouchableOpacity>
                    </StyledView>
                )}
            />
        </StyledView>
    );
}

export default PostDetailRelatedPosts;
