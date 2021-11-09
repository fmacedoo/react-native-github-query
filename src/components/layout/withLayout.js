import Layout from './Layout';
import React from 'react';

export default function withLayout(WrappedComponent) {
    const Component = ({ ...props }) => (
        <Layout>
            <WrappedComponent {...props} />
        </Layout>
    );

    return Component;
}
