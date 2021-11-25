import React, { Fragment } from 'react';

import { Heading } from '@reactnativegithubquery/components/typography';
import { StyledBorderedView, StyledColumn, StyledRow, StyledView } from './styles';
import { withRouterParams } from '@reactnativegithubquery/shared';
import Anchor from '@reactnativegithubquery/components/anchor';
import Separator from '@reactnativegithubquery/components/separator';
import Spacer from '@reactnativegithubquery/components/spacer';
import Tycon from '@reactnativegithubquery/components/tycon';
import withLayout from '@reactnativegithubquery/components/layout/withLayout';

import Repo from '@reactnativegithubquery/slices/repo';
import UserHeader from '@reactnativegithubquery/slices/user-header';

function UserScreen({ user }) {
    const moreInfo = [
        { value: user.email, icon: 'at' },
        { value: user.location, icon: 'map-pin' },
        { value: user.company, icon: 'building' },
    ].filter(info => info.value);

    return (
        <StyledView>
            <StyledRow>
                <UserHeader {...user} />
            </StyledRow>
            {moreInfo.length > 0 && (
                <StyledColumn>
                    <Heading text="More" bold />
                    <Spacer size="xs" />
                    <StyledBorderedView>
                        {moreInfo.map(info => (
                            <Tycon
                                key={`${info.icon}${info.value}`}
                                icon={info.icon}
                                text={info.value}
                                typography={{
                                    variant: 'heading',
                                }}
                            />
                        ))}
                    </StyledBorderedView>
                </StyledColumn>
            )}
            {user.repositories.nodes.length > 0 && (
                <StyledColumn>
                    <Tycon
                        icon="bookmark"
                        text="Repositories"
                        typography={{
                            variant: 'heading',
                            bold: true,
                        }}
                    />
                    <Spacer size="xs" />
                    <StyledBorderedView noPadding>
                        {user.repositories.nodes.map((repo, i) => (
                            <Fragment key={repo.id}>
                                <Repo {...repo} />
                                {i < user.repositories.nodes.length - 1 && <Separator />}
                            </Fragment>
                        ))}
                    </StyledBorderedView>
                    {user.repositories.totalCount > user.repositories.nodes.length && (
                        <StyledRow justify="center">
                            <Anchor
                                href={user.url}
                                typography={{
                                    text: 'See more at GitHub',
                                    color: 'highlight',
                                    bold: true,
                                }}
                            />
                        </StyledRow>
                    )}
                </StyledColumn>
            )}
        </StyledView>
    );
}

export default withLayout(withRouterParams(UserScreen));
