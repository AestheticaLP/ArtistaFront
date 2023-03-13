import React, { ReactElement } from 'react';
import { StyledText, StyledImage, StyledView } from '../../../components/StyledComponents';

function MessageItemList() : ReactElement {
    return (
        <StyledView className="flex-1 items-center flex-row px-4 py-2 bg-orange-300 my-6 rounded-lg">
            <StyledImage
              className="w-14 h-14 rounded-full"
              source={{
                    uri: 'https://animefanfest.com/wp-content/uploads/2022/08/One-Piece-pourquoi-linfluence-de-Luffy-est-imparable-les.jpg',
                }}
            />
            <StyledView className="pl-3 flex-1 flex-column justify-between">
                <StyledText className="font-medium">Loulou</StyledText>
                <StyledText className="truncate">Tu es le meilleur de test vfgehzvhyehveyver e fyuer uyregyu feryu re gyuer yufvduvfguveu fdvhuc dsuhv fedghfhufddgufdfhuhu vfhfd vhd sghbdhjvfdhbvf</StyledText>
            </StyledView>
        </StyledView>
	);
}

export default MessageItemList;
