import { Alert, Platform } from 'react-native';
import React, { useState } from 'react';

import Button from '@reactnativegithubquery/components/button';
import Spacer from '@reactnativegithubquery/components/spacer';
import TextInput from '@reactnativegithubquery/components/text-input';
import api from '@reactnativegithubquery/sdks';
import withLayout from '@reactnativegithubquery/components/layout/withLayout';

import { StyledGithubOctocat, StyledView } from './styles';

function SearchScreen({ navigation }) {
    const [username, setUsername] = useState('');

    async function performsearch() {
        try {
            const user = await api.github.users.by.username(username).get();
            navigation.navigate('User', { user });
        } catch (err) {
            if (err.status === 404) {
                Alert.alert('User not found!', 'No users were found.', [{ text: 'OK' }]);
            } else {
                Alert.alert('Ops!', 'I did it again!\nUnkown error!', [{ text: 'OK' }]);
            }
        }
    }

    return (
        <StyledView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <StyledGithubOctocat />
            <Spacer />
            <TextInput
                dataTest="Username"
                value={username}
                placeholder="Type to search user"
                onChangeText={e => setUsername(e)}
                textAlign="center"
                autoCapitalize="none"
            />
            <Spacer size="xs" />
            <Button dataTest="Search" title="Search" highlight onPress={() => performsearch()} />
        </StyledView>
    );
}

export default withLayout(SearchScreen);
