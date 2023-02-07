import { styled } from 'nativewind';
import React, { ReactElement } from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

type CheckBoxProps = {
    rounded?: boolean;
    checked: boolean;
    onPress(): void;
};

const StyledCheckBox = styled(BouncyCheckbox, { classProps: ['iconStyle'] });

function CheckBox(props: CheckBoxProps): ReactElement {
    const { checked, onPress, rounded } = props;

    return (
        <StyledCheckBox
            disableBuiltInState
            size={32}
            iconStyle={`
                w-9 h-9 shadow-lg shadow-violet-500 border-violet-500
                ${rounded ? 'rounded-full' : 'rounded-lg'}
                ${checked ? 'bg-violet-500 p-0.5' : 'bg-neutral-50 border-2'}
            `}
            isChecked={checked}
            unfillColor="transparent"
            fillColor="transparent"
            onPress={onPress}
        />
    );
}

export default CheckBox;
