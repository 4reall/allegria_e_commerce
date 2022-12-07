import Accordion from 'common/components/Accordion/Accordion';
import Header from 'common/components/Header/Header';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox';
import { PaletteTree } from './palette';

const ComponentPreviews = () => {
	const { t } = useTranslation('common');
	return (
		<Previews palette={<PaletteTree />}>
			<ComponentPreview path="/Accordion">
				<Accordion
					linkGroups={t('navLinks', { returnObjects: true })}
				/>
			</ComponentPreview>
			<ComponentPreview path="/Header">
				<Header navLinks={t('navLinks', { returnObjects: true })} />
			</ComponentPreview>
			<ComponentPreview path="/ComponentPreviews">
				<ComponentPreviews />
			</ComponentPreview>
		</Previews>
	);
};

export default ComponentPreviews;
