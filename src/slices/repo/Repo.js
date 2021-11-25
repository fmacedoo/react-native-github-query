import { string } from 'prop-types';
import React from 'react';
import neatime from 'neatime';

import { Footnote, Heading } from '@reactnativegithubquery/components/typography';
import Anchor from '@reactnativegithubquery/components/anchor';

import { StyledView } from './styles';

export default function Repo({ url, name, description, updatedAt, dataTest = '' }) {
    return (
        <StyledView testID={`${dataTest}Repo`}>
            <Anchor
                href={url}
                typography={{
                    text: name,
                    color: 'highlight',
                    bold: true,
                }}
            />
            {description && <Heading text={description} color="secondary" />}
            {updatedAt && (
                <Footnote
                    dataTest="RepoUpdatedAt"
                    text={`last update ${neatime(updatedAt)}`}
                    color="secondary"
                />
            )}
        </StyledView>
    );
}

Repo.propTypes = {
    url: string.isRequired,
    name: string.isRequired,
    description: string,
    updatedAt: string,
};
