import { styled } from 'nativewind';
import React, { ReactElement } from 'react';
import { View, Image, Text } from 'react-native';

const StyledText = styled(Text);
const StyledImg = styled(Image);
const StyledView = styled(View);

function MessageItemList() : ReactElement {
    return (
        <StyledView className="flex">
            <StyledImg
              className="w-10 h-10 rounded-full"
              source={{
                    uri: 'https://animefanfest.com/wp-content/uploads/2022/08/One-Piece-pourquoi-linfluence-de-Luffy-est-imparable-les.jpg',
                }}
            />
            <StyledView>
                <StyledText>Test</StyledText>
            </StyledView>
        </StyledView>
	);
}

export default MessageItemList;
