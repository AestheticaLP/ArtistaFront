import React, { ReactElement } from 'react';

import { StyledText, StyledView } from '../../components/StyledComponents';

type HomeContentProps = {
  title: string;
};

function HomeContent(props: HomeContentProps): ReactElement {
  const { title } = props;

  return (
    <StyledView className="px-20">
      <StyledText className="text-2xl font-bold text-gray-800">
        {title}
      </StyledText>
    </StyledView>
  );
}

export default HomeContent;
