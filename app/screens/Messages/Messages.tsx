import React, { ReactElement } from 'react';
import { View } from 'react-native';
import MessagesHeader from '../../features/messages/MessagesHeader';
import MessagesContent from '../../features/messages/MessagesContent';
import MessagesFooter from '../../features/messages/MessagesFooter';

function Messages(): ReactElement {
	return (
        <View>
            <MessagesHeader title="Messages Header" />
            <MessagesContent title="Messages Content" />
            <MessagesFooter title="Messages Footer" />
        </View>
	);
}

export default Messages;
