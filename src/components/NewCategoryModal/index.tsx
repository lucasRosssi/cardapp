import React from 'react';
import { useTheme } from 'styled-components';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Modal from 'react-native-modal';
import { AppInput } from '../AppInput';

import { CloseButton, Container, Title } from './styles';
import { AppIcon } from '../AppIcon';

interface ModalProps {
	isVisible: boolean;
	closeModal: () => void;
	isLoading: boolean;
	addCategory: (category: string) => Promise<void>;
}

interface FormData {
	category: string;
}

const schema = Yup.object().shape({
	category: Yup.string().required(
		'É necessário escolher um nome para a categoria'
	),
});

export function NewCategoryModal({
	isVisible,
	closeModal,
	isLoading,
	addCategory,
}: ModalProps) {
	const theme = useTheme();
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<any>({
		resolver: yupResolver(schema),
	});

	async function handleCreateNewCategory(form: FormData) {
		await addCategory(form.category);
		closeModal();
	}

	return (
		<Modal
			isVisible={isVisible}
			style={{ margin: 0 }}
			backdropOpacity={0.5}
			onBackdropPress={closeModal}
			onBackButtonPress={closeModal}
		>
			<Container>
				<CloseButton onPress={closeModal}>
					<AppIcon name="x" color={theme.colors.primary} size={25} />
				</CloseButton>
				<Title>Nova categoria</Title>

				<AppInput
					name="category"
					control={control}
					error={errors.category && errors.category.message}
					button
					buttonIcon="plus"
					onButtonPress={handleSubmit(handleCreateNewCategory)}
					isLoading={isLoading}
				/>
			</Container>
		</Modal>
	);
}
