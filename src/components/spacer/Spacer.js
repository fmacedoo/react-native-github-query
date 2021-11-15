import { oneOf, string } from 'prop-types';
import React from 'react';

import { StyledSpacer } from './styles.js';

export const Spacer = ({ size = 'm', dataTest = '' }) => (
    <StyledSpacer testID={`${dataTest}Spacer`} size={size} />
);

Spacer.propTypes = {
    size: oneOf(['xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']),
    dataTest: string,
};

export default Spacer;
