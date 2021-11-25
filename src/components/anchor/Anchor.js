import { Linking, TouchableOpacity } from 'react-native';
import { string } from 'prop-types';
import React, { useCallback } from 'react';

import Tycon from '@reactnativegithubquery/components/tycon';
import Typography from '../typography';

export default function Anchor({ href, tycon, typography, dataTest = '' }) {
    const handlePress = useCallback(async () => {
        await Linking.openURL(href);
    }, [href]);

    if (tycon && typography) {
        throw new Error('Use tycon or typography. Not both!');
    }

    return (
        <TouchableOpacity testID={`${dataTest}Anchor`} onPress={handlePress}>
            {tycon && <Tycon {...tycon} />}
            {typography && <Typography {...typography} />}
        </TouchableOpacity>
    );
}

Anchor.propTypes = {
    href: string,
};
