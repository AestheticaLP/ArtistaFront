import React, { ReactElement } from 'react';
import { StyledView } from '../../components/StyledComponents';
import MessagesList from './components/MessagesList';

function MessagesContent(): ReactElement {
	return (
        <StyledView>
            <MessagesList />
        </StyledView>
	);
}

export default MessagesContent;
