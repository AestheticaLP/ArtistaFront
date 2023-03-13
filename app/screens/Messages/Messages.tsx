import React, { ReactElement } from 'react';
import { View } from 'react-native';
import MessagesHeader from '../../features/messages/MessagesHeader';
import MessagesContent from '../../features/messages/MessagesContent';

function Messages(): ReactElement {
	return (
        <View>
            <MessagesHeader title="Messages Header" />
            <MessagesContent />
        </View>
	);
}

export default Messages;
