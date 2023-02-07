import React, { ReactElement } from 'react';
import { useNavigation } from '@react-navigation/native';

import { StyledText, StyledView } from '../../components/StyledComponents';
import { RootStackParamList } from '../../types/StackParamList';
import Button from '../../components/Button';

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
            <Button content="Messages" type="secondary" onPress={() => navigation.navigate('Messages')} />
        </StyledView>
	);
}

export default HomeContent;
