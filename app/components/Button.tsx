/* eslint-disable no-nested-ternary */
import React, { ReactElement } from 'react';
import { ActivityIndicator } from 'react-native';
import { styled } from 'nativewind';

import { StyledPressable, StyledText } from './StyledComponents';

const StyledActivityIndicator = styled(ActivityIndicator, { classProps: ['color'] });

type ButtonProps = {
    content: string;
    onPress(): void;
    type: 'primary' | 'secondary';
    loading?: boolean;
    disabled?: boolean;
};

function Button(props: ButtonProps): ReactElement {
    const { content, onPress, loading, disabled, type } = props;

    return (
        <StyledPressable
            className={`
                component justify-center items-center p-2.5 rounded-full w-36
                ${type === 'primary'
                    ? disabled ? 'bg-violet-400'
                               : 'bg-violet-500 active:bg-violet-600'
                    : ''
                }
                ${type === 'secondary'
                    ? disabled ? 'bg-neutral-50 border border-violet-400'
                               : 'bg-neutral-50 border-violet-500 border active:bg-neutral-100 active:border-violet-700'
                    : ''
                }
            `}
            onPress={onPress}
            disabled={disabled || loading}
        >
            {loading ? (
                <StyledActivityIndicator size="small" color={type === 'primary' ? 'color-white' : 'color-violet-500'} />
            ) : (
                <StyledText
                    className={`
                        font-[Roboto-Medium] 
                        ${type === 'primary'
                            ? disabled ? 'text-neutral-50'
                                       : 'text-white'
                            : ''
                        }
                        ${type === 'secondary'
                            ? disabled ? 'text-violet-400'
                                       : 'text-violet-700'
                            : ''
                        }
                    `}
                >
                    {content}
                </StyledText>
            )}
        </StyledPressable>
    );
}

export default Button;
