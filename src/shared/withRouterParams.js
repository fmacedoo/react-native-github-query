import React from 'react';

export default function withRouterParams(WrappedComponent) {
    return ({ route: { params } }) => <WrappedComponent {...params} />;
}
