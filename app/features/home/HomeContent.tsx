import React, { ReactElement } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyledPressable, StyledText, StyledView } from '../../components/StyledComponents';
import { RootStackParamList } from '../../types/StackParamList';
import TagChip from '../../components/TagChip';

type HomeContentProps = {
    title: string;
};

function HomeContent(props: HomeContentProps): ReactElement {
    const navigation = useNavigation<RootStackParamList>();
    const { title } = props;

	return (
        <StyledView className="px-20">
            <StyledText className="text-emerald-500 font-[Roboto-Black]">
                {title}
            </StyledText>
            <StyledPressable
                className="bg-emerald-500 rounded-2xl p-3"
                onPress={() => navigation.navigate('Messages')}
            >
                <StyledText className="text-white font-[Roboto-Black]">
                    Press me
                </StyledText>
            </StyledPressable>
            <TagChip content="Rap" />
        </StyledView>
	);
}

export default HomeContent;
