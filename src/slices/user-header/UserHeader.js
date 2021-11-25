import { string } from 'prop-types';
import React from 'react';

import { Column } from '@reactnativegithubquery/components/layout';
import { Display, Heading } from '@reactnativegithubquery/components/typography';

import { StyledImage } from './styles';
import Anchor from '@reactnativegithubquery/components/anchor';
import Spacer from '@reactnativegithubquery/components/spacer';

export default function UserHeader({
    avatarUrl,
    name,
    bio,
    description,
    websiteUrl,
    dataTest = '',
}) {
    return (
        <>
            <Column>
                <StyledImage
                    testID={`${dataTest}Avatar`}
                    source={{ uri: avatarUrl, width: 460, height: 460 }}
                    width={0}
                    height={0}
                />
            </Column>
            <Column>
                <Display dataTest="Name" text={name} bold />
                <Heading dataTest="Bio" text={bio || description} color="secondary" />
                {(websiteUrl && (
                    <>
                        <Spacer size="xs" />
                        <Anchor
                            dataTest="WebsiteUrl"
                            href={websiteUrl}
                            tycon={{
                                icon: 'link',
                                text: websiteUrl,
                                typography: {
                                    variant: 'footnote',
                                },
                            }}
                        />
                    </>
                )) ||
                    false}
            </Column>
        </>
    );
}

UserHeader.propTypes = {
    avatarUrl: string,
    name: string,
    bio: string,
    description: string,
    websiteUrl: string,
    dataTest: string,
};
