import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';
import { useAuth } from '../../../hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { SmallButton } from '../../../components/SmallButton';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';

import { Container, Logo, Form, UserType } from './styles';

interface FormData {
	email: string;
	password: string;
}

const schema = Yup.object().shape({
	email: Yup.string()
		.email('Digite um email válido')
		.required('Digite o seu email'),
	password: Yup.string()
		.required('Digite sua senha')
		.min(8, 'A senha deve conter no mínimo 8 caracteres'),
});

export function Login() {
	const theme = useTheme();
	const { signIn } = useAuth();
	const { navigate } = useNavigation();
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<any>({
		resolver: yupResolver(schema),
	});

	const [isClient, setIsClient] = useState(true);

	function handleChangeUserType() {
		setIsClient(!isClient);
	}

	function handleSignIn(form: FormData) {
		const data = {
			email: form.email,
			password: form.password,
		};

		if (isClient) {
			signIn(data);
		} else {
		}
	}

	function handleNewAccount() {
		navigate('Register');
	}

	return (
		<Container>
			<StatusBar barStyle="dark-content" />

			<UserType>
				<SmallButton
					onPress={handleChangeUserType}
					title={isClient ? 'Cliente' : 'Estabelecimento'}
					color={isClient ? theme.colors.primary : theme.colors.full_light}
					textColor={isClient ? theme.colors.full_light : theme.colors.primary}
				/>
			</UserType>

			<Logo>MyCardapp</Logo>

			<Form>
				<Input
					control={control}
					name="email"
					topPlaceholder="E-mail"
					keyboardType="email-address"
					autoCapitalize="none"
					style={{ marginBottom: 20 }}
					error={errors.email && errors.email.message}
				/>
				<Input
					name="password"
					control={control}
					topPlaceholder="Senha"
					secureTextEntry
					error={errors.password && errors.password.message}
				/>
			</Form>
			<Button
				title="Entrar"
				onPress={handleSubmit(handleSignIn)}
				style={{ marginBottom: 10 }}
			/>

			<Button
				title="Criar conta"
				textColor={theme.colors.primary}
				color={theme.colors.full_light}
				onPress={handleNewAccount}
			/>
		</Container>
	);
}
