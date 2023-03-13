import React, { ReactElement } from 'react';
import { Pressable } from 'react-native';
import { Flag } from 'lucide-react-native';

type ReportButtonProps = {
    size?: number;
    onReport(): void;
};

function ReportButton(props: ReportButtonProps): ReactElement {
    const { size, onReport } = props;

    return (
        <Pressable onPress={onReport}>
            <Flag color="#9B70FF" size={size ?? 20} />
        </Pressable>
    );
}

export default ReportButton;
