import { node } from 'prop-types';
import React from 'react';
import styled from 'styled-components/native';

const StyledView = styled.View`
    flex-direction: row;
    align-items: ${({ align }) => align};
    justify-content: ${({ justify }) => justify};
`;

export default function Row({ align = 'center', justify = 'flex-start', children, ...rest }) {
    return (
        <StyledView align={align} justify={justify} {...rest}>
            {children}
        </StyledView>
    );
}

Row.propTypes = {
    children: node,
};
