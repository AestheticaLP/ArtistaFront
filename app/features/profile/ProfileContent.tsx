import { useNavigation } from '@react-navigation/native';
import { styled } from 'nativewind';
import React, { ReactElement } from 'react';
import { View, Text, Pressable } from 'react-native';
import { RootStackParamList } from '../../types/StackParamList';

const StyledText = styled(Text);

type ProfileContentProps = {
    title: string;
};

function ProfileContent(props: ProfileContentProps): ReactElement {
    const navigation = useNavigation<RootStackParamList>();
    const { title } = props;

	return (
        <View>
            <StyledText className="text-emerald-500">
                {title}
            </StyledText>
            <Pressable
              onPress={() => {
                    navigation.navigate('Messages');
                }}
            >
                <StyledText className="text-blue-500">
                    Go to Messages
                </StyledText>
            </Pressable>
        </View>
	);
}

export default ProfileContent;
