import React, { ReactElement } from 'react';
import { StyledScrollView } from '../../../components/StyledComponents';
import MessageItemList from './MessageItemList';

function MessagesList() : ReactElement {
    return (
        <StyledScrollView className="mx-6">
            <MessageItemList />
        </StyledScrollView>
	);
}

export default MessagesList;
