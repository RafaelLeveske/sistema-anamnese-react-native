import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import React, { useCallback, useEffect, useState } from 'react';
import { View, Button } from 'react-native';

import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

import perfilAvatar from '../../assets/perfil.png';
import providerAvatar from '../../assets/provider.png';

import {
  Container,
  Header,
  HeaderTitle,
  UserName,
  ProfileButton,
  UserAvatar,
  ProvidersList,
  ProvidersListTitle,
  ProviderContainer,
  ProviderAvatar,
  ProviderInfo,
  ProviderName,
  ProviderMeta,
  ProviderMetaText,
  LogOutButton,
  LogOutButtonText,
} from './styles';

export interface Provider {
  id: string;
  name: string;
  avatar_url: string;
}

const Dashboard: React.FC = () => {
  const [providers, setProviders] = useState<Provider[]>([]);
  const { signOut, user } = useAuth();
  const { navigate } = useNavigation();

  const navigateToProfile = useCallback(() => {
    navigate('Profile');
  }, [navigate]);

  useEffect(() => {
    api.get('providers').then(response => {
      setProviders(response.data);
    });
  }, []);

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Bem vindo,
          {'\n'}
          <ProfileButton onPress={navigateToProfile}>
            <UserName>{user.name}</UserName>
          </ProfileButton>
        </HeaderTitle>

        <ProfileButton onPress={navigateToProfile}>
          <UserAvatar source={perfilAvatar} />
        </ProfileButton>
      </Header>

      <ProvidersList
        data={providers}
        keyExtractor={provider => provider.id}
        ListHeaderComponent={
          <ProvidersListTitle>Psicólogos disponíveis:</ProvidersListTitle>
        }
        renderItem={({ item: provider }) => (
          <ProviderContainer onPress={() => {}}>
            <ProviderAvatar source={providerAvatar} />

            <ProviderInfo>
              <ProviderName>{provider.name}</ProviderName>

              <ProviderMeta>
                <Icon name="calendar" size={14} color="#d864bb" />
                <ProviderMetaText>Segunda à sexta</ProviderMetaText>
              </ProviderMeta>

              <ProviderMeta>
                <Icon name="clock" size={14} color="#d864bb" />
                <ProviderMetaText>8h às 18h</ProviderMetaText>
              </ProviderMeta>
            </ProviderInfo>
          </ProviderContainer>
        )}
      />
      <LogOutButton onPress={signOut}>
        <LogOutButtonText>Sair</LogOutButtonText>
      </LogOutButton>
    </Container>
  );
};

export default Dashboard;
