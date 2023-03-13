import React, { ReactElement } from 'react';
import { Pressable } from 'react-native';
import { Share2 as Share } from 'lucide-react-native';

type ShareButtonProps = {
    size?: number;
    onShare(): void;
};

function ShareButton(props: ShareButtonProps): ReactElement {
    const { size, onShare } = props;

    return (
        <Pressable onPress={onShare}>
            <Share color="#9B70FF" size={size ?? 20} />
        </Pressable>
    );
}

export default ShareButton;
