/* eslint-disable no-unused-vars */
import { styled } from 'nativewind';
import React, { ReactElement } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import PostDetailContent from '../features/postDetail/PostDetailContent';
import PostDetailHeader from '../features/postDetail/PostDetailHeader';
import PostDetailRelatedPosts from '../features/postDetail/PostDetailRelatedPosts';
// import PostDetailRelatedPosts from '../features/postDetail/PostDetailRelatedPosts';
import { Media, MediaType } from '../types/Media';
import { ContentWarning, Post } from '../types/Post';
import { Tag, TagType } from '../types/Tag';

const StyledView = styled(View);
const StyledText = styled(Text);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

function PostDetail(): ReactElement {
  const m: Media[] = [
    {
      id: '',
      type: MediaType.Image,
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'Photo du milkshake',
    },
  ];

  const t: Tag[] = [
    { id: '', type: TagType.ArtForm, name: 'Photography' },
    { id: '', type: TagType.Genre, name: 'Surreal' },
  ];

  const p: Post = {
    title: 'Milkshake à la pomme',
    id: 'id',
    postedBy: undefined,
    credits: undefined,
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description: "Ceci n'est pas une description.",
    location: 'Paris, France',
    tags: t,
    media: m,
    likeAmount: 0,
    likedBy: undefined,
    reports: undefined,
    contentWarning: ContentWarning.None,
  };

  const desc: string = 'Ceci est un milkshake à la pomme. '
    + "J'ai pris cette photo en contre plongé horizontal pour faire sortir les agrumes de ce mélange.";

  return (
    <ScrollView>
      <StyledView className="w-11/12 self-center neutral-50 pb-[80px]">
        <PostDetailHeader />
        <PostDetailContent
          username="Enzo le zozo"
          location="Bezziers, Connecticut"
          title="Milkshake à la pomme"
          imageUrl=""
          description={desc}
        />
        <PostDetailRelatedPosts postPreviews={[
          { imageUrl: 'https://assets1.ignimgs.com/2019/06/10/dead-cells---button-fin-1560125633132.jpg', redirectUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
          { imageUrl: 'https://gameah.fr/wp-content/uploads/2021/11/Outer-Wilds.jpeg', redirectUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
          { imageUrl: 'https://upload.wikimedia.org/wikipedia/en/6/6a/HyperLightDrifterBoxArt.png', redirectUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
        ]}
        />
      </StyledView>
    </ScrollView>
  );
}

export default PostDetail;
