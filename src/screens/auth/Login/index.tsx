import React from 'react';
import { useTheme } from 'styled-components/native';
import { useAuth } from '../../../hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';

import { Container, Logo, Form } from './styles';

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

	function handleSignIn(form: FormData) {
		const data = {
			email: form.email,
			password: form.password,
		};

		signIn(data);
	}

	function handleNewAccount() {
		navigate('Register');
	}

	return (
		<Container>
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
