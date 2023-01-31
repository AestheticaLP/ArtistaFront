import { styled } from 'nativewind';
import React, { ReactElement } from 'react';
import {
	SafeAreaView,
	ScrollView,
	Text,
	View,
} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

const StyledText = styled(Text);

function App(): ReactElement {
	return (
		<SafeAreaView>
			<ScrollView>
				<Header />
				<View>
					<StyledText className="text-red-500">
						YOP !
					</StyledText>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

export default App;
