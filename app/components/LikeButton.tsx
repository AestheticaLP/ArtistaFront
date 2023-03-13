import React, { ReactElement, useState } from 'react';
import { Pressable } from 'react-native';
import { Heart } from 'lucide-react-native';

type LikeButtonProps = {
  size?: number;
  onLike(): void;
  onDislike(): void;
};

function LikeButton(props: LikeButtonProps): ReactElement {
  const { size, onLike, onDislike } = props;

  const [isLiked, setIsLiked] = useState(false);

  return (
    <Pressable
      onPress={isLiked ? onDislike : onLike}
      onPressOut={() => setIsLiked(!isLiked)}
    >
      <Heart
        fill={isLiked ? '#9B70FF' : '#FFFFFF'}
        color="#9B70FF"
        size={size ?? 20}
      />
    </Pressable>
  );
}

export default LikeButton;
