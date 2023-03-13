import React, { ReactElement, useState } from 'react';
import { Pressable } from 'react-native';
import { Bookmark } from 'lucide-react-native';

type BookmarkButtonProps = {
  size?: number;
  onBookmark(): void;
  onUnbookmark(): void;
};

function BookmarkButton(props: BookmarkButtonProps): ReactElement {
  const { size, onBookmark, onUnbookmark } = props;

  const [isBookmarkd, setIsBookmarkd] = useState(false);

  return (
    <Pressable
      onPress={isBookmarkd ? onUnbookmark : onBookmark}
      onPressOut={() => setIsBookmarkd(!isBookmarkd)}
    >
      <Bookmark
        fill={isBookmarkd ? '#9B70FF' : '#FFFFFF'}
        color="#9B70FF"
        size={size ?? 20}
      />
    </Pressable>
  );
}

export default BookmarkButton;
