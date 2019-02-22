import React from 'react';

/* Commons */
import { Container, Form, Input, Section, Textarea, Title } from 'commons';

const Section4 = () => (
	<Section background={'#d7d6e1'}>
		<Container padding={'4em 0'}>
			<Form action="" width={'50%'}>
				<Title align={'center'} color={'#1f1b58'}>
					Contact Us
				</Title>
				<Input type={'text'} name={'name'} placeholder={'name'} />
				<Input type={'email'} name={'email'} placeholder={'email'} />
				<Input type={'password'} name={'password'} placeholder={'password'} />
				<Textarea
					name={'message'}
					id={'message'}
					placeholder={'Something to say ?'}
					rows={'6'}
				/>
				<Input
					type={'submit'}
					value={'Submit'}
					bgColor={'#1f1b58'}
					color={'#efefef'}
					borderWidth={'0'}
					hoverBgColor={'#5c1354'}
					pointer
				/>
			</Form>
		</Container>
	</Section>
);
export default Section4;
