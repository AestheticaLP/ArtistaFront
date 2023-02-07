import React, { ReactElement } from 'react';
import { X } from 'lucide-react-native';
import { styled } from 'nativewind';
import { StyledPressable, StyledText } from './StyledComponents';

const StyledX = styled(X);

type TagChipProps = {
    content: string;
    onPress?(): void;
};

function TagChip(props: TagChipProps): ReactElement {
    const { content, onPress } = props;

    return (
        <StyledPressable onPress={onPress} className="flex-row bg-neutral-50 shadow-sm shadow-black border-neutral-900 w-16 h-6 border justify-center items-center rounded-full px-1">
            <StyledText
                numberOfLines={1}
                className={`
                  text-neutral-900
                    font-[Roboto-Medium]
                    ${onPress ? 'mr-2' : 'mr-0'}
                `}
            >
                {content}
            </StyledText>
            {onPress && (
                <StyledX className="absolute right-1" color="#171717" size={15} />
            )}
        </StyledPressable>
    );
}

export default TagChip;
