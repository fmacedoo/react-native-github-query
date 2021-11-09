import React from 'react';
import Layout from './Layout';

export default function withLayout(WrappedComponent) {
    const Component = ({ ...props }) => (
        <Layout>
            <WrappedComponent {...props} />
        </Layout>
    );

    return Component;
}
