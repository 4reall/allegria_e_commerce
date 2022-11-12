import AccordionItem from 'common/components/Accordion/AccordionItem';
import Accordion from 'common/components/Accordion/Accordion';

import Modal from 'common/components/_base/Modal/Modal';
import Typography from 'common/components/_base/Typography/Typography';
import React from 'react';

const questions = () => {
	const DATA = [
		{
			title: 'Вопрос от покупателя',
			content: [
				'Оплата осуществляется наличными денежными средствами курьеру непосредственно при доставке заказа на адрес получателя. Выбрав данный способ оплаты, Вы получаете возможность рассмотреть и примерить заказанный товар.  Если какая-то позиция Вам не подошла, Вы можете просто вернуть ее курьеру, не оплачивая.',
			],
		},
		{
			title: 'Вопрос от покупателя',
			content: [
				'Оплата осуществляется наличными денежными средствами курьеру непосредственно при доставке заказа на адрес получателя. Выбрав данный способ оплаты, Вы получаете возможность рассмотреть и примерить заказанный товар.  Если какая-то позиция Вам не подошла, Вы можете просто вернуть ее курьеру, не оплачивая.',
			],
		},
		{
			title: 'Вопрос от покупателя',
			content: [
				'Оплата осуществляется наличными денежными средствами курьеру непосредственно при доставке заказа на адрес получателя. Выбрав данный способ оплаты, Вы получаете возможность рассмотреть и примерить заказанный товар.  Если какая-то позиция Вам не подошла, Вы можете просто вернуть ее курьеру, не оплачивая.',
			],
		},
		{
			title: 'Вопрос от покупателя',
			content: [
				'Оплата осуществляется наличными денежными средствами курьеру непосредственно при доставке заказа на адрес получателя. Выбрав данный способ оплаты, Вы получаете возможность рассмотреть и примерить заказанный товар.  Если какая-то позиция Вам не подошла, Вы можете просто вернуть ее курьеру, не оплачивая.',
			],
		},
	];

	return (
		<div>
			<div className="mx-auto max-w-4xl">
				<Typography
					uppercase
					bold
					variant="2xl"
					className="mb-10 block"
				>
					Популярные вопросы
				</Typography>
				<div className="flex  w-full gap-x-16">
					<div className="w-2/3">
						<Typography
							uppercase
							bold
							variant="lg"
							className="mb-4 block"
						>
							покупки
						</Typography>
						<div className="w-full">
							<Accordion
								content={DATA}
								renderItem={(item, index) => (
									<AccordionItem item={item} index={index} />
								)}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default questions;
