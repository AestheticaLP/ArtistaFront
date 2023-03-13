import React, { ReactElement } from 'react';
import { FlatList, Linking, TouchableOpacity } from 'react-native';
import { StyledImage, StyledView } from '../../components/StyledComponents';
import TitleMedium from '../../components/Text/TitleMedium';
import texts from '../../localized_strings/strings';

type PostPreviewProps = {
    posts: {
        imageUrl: string;
        redirectUrl: string;
    }[];
}

function PostDetailRelatedPosts(props: PostPreviewProps): ReactElement {
    const { posts } = props;

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
