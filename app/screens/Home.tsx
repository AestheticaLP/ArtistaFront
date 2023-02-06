import React, { ReactElement } from 'react';
import { View } from 'react-native';
import HomeHeader from '../features/home/HomeHeader';
import HomeContent from '../features/home/HomeContent';
import HomeFooter from '../features/home/HomeFooter';

function Home(): ReactElement {
	return (
        <View>
            <HomeHeader title="Home Header" />
            <HomeContent title="Home Content" />
            <HomeFooter title="Home Footer" />
        </View>
	);
}

export default Home;
