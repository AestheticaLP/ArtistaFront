/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
import React, { ReactElement } from 'react';
import {
    View, Pressable,
} from 'react-native';
import { Home, MessageCircle, User } from 'lucide-react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledPressable = styled(Pressable);

function TabBar({ state, descriptors, navigation }: any): ReactElement {
    return (
    <StyledView className="flex-row absolute shadow-2xl bottom-0 bg-[#fefefe] shadow-black">
        {state.routes.map((route: any, index: number) => {
            const { options } = descriptors[route.key];
            const label = options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;
            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
              });
              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            return (
                <StyledView key={index} className="flex-1 justify-center items-center my-2">
                <StyledPressable
                    onPress={onPress}
                    className={`
                        rounded-2xl
                        ${isFocused ? 'bg-neutral-50' : 'bg-[#fefefe]'}
                    `}
                >
                    <StyledView className="justify-center items-center flex-1 p-3">
                        {
                            label === 'Home' ? (
                                <Home
                                    color={isFocused ? '#9333ea' : '#d1d5db'}
                                    size={25}
                                />
                            ) : null
                        }
                        {
                            label === 'Settings' ? (
                                <User
                                    color={isFocused ? '#9333ea' : '#d1d5db'}
                                    size={25}
                                />
                            ) : null
                        }
                        {
                            label === 'Messages' ? (
                                <MessageCircle
                                    color={isFocused ? '#9333ea' : '#d1d5db'}
                                    size={25}
                                />
                            ) : null
                        }
                    </StyledView>
                </StyledPressable>
                </StyledView>
            );
        })}
    </StyledView>
    );
}

export default TabBar;
