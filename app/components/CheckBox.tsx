import React, { ReactElement } from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

type CheckBoxProps = {
    rounded?: boolean;
    checked: boolean;
    onPress(): void;
};

function CheckBox(props: CheckBoxProps): ReactElement {
    const { checked, onPress, rounded } = props;

    return (
        <BouncyCheckbox
            disableBuiltInState
            size={30}
            iconStyle={{
                shadowColor: '#8b5cf6',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                borderRadius: rounded ? 100 : 8,
                borderColor: '#8b5cf6',
                borderWidth: 2,
                backgroundColor: checked ? '#8b5cf6' : '#fafafa',
            }}
            isChecked={checked}
            style={{
                width: 30,
                backgroundColor: checked ? '#8b5cf6' : '#fafafa',
                borderRadius: rounded ? 100 : 8,
            }}
            unfillColor="transparent"
            fillColor="transparent"
            onPress={onPress}
        />
    );
}

export default CheckBox;
