import React from 'react';

import { bodyStyle } from './styles';
import Typography from './Typography';

export const DisplayLarge = props => <Typography {...props} variant="displayLarge" />;
export const Display = props => <Typography {...props} variant="display" />;
export const Heading = props => <Typography {...props} variant="heading" />;
export const Kicker = props => <Typography {...props} variant="kicker" />;
export const Body = props => <Typography {...props} variant="body" />;
export const Footnote = props => <Typography {...props} variant="footnote" />;

export const BodyStyle = bodyStyle;

export { Typography };
export default Typography;
