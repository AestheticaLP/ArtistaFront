import React, { ReactElement } from 'react';
import HomeHeader from '../features/home/HomeHeader';
import HomeContent from '../features/home/HomeContent';
import HomeFooter from '../features/home/HomeFooter';
import { StyledView } from '../components/StyledComponents';

function Home(): ReactElement {
	return (
        <StyledView className="bg-neutral-50 flex-1">
            <HomeHeader title="Home Header" />
            <HomeContent title="Home Content" />
            <HomeFooter title="Home Footer" />
        </StyledView>
	);
}

export default Home;
