import React from "react";
import Modal from "../_base/Modal/Modal";
import Typography from "../_base/Typography/Typography";

interface PaymentModalProps {
  trigger: React.ReactNode;
}

const PaymentModal = ({ trigger }: PaymentModalProps) => {
  return (
    <Modal trigger={trigger}>
      <div className="flex flex-col gap-2.5">
        <Typography uppercase bold variant="sm">
          оплата
        </Typography>
        <Typography bold variant="sm">
          Наличными при получении
        </Typography>
        <Typography variant="sm" as="p">
          <span>
            Оплата осуществляется наличными денежными средствами
            курьеру непосредственно при доставке заказа на адрес
            получателя. Выбрав данный способ оплаты, Вы получаете
            возможность рассмотреть и примерить заказанный товар.
          </span>
          <br />
          <br />
          <span>
            Если какая-то позиция Вам не подошла, Вы можете просто
            вернуть ее курьеру, не оплачивая.
          </span>
        </Typography>
        <Typography bold variant="sm">
          Картой на сайте (Visa, Mastercard)
        </Typography>
        <Typography variant="sm">
          На сайте нашего интернет-магазина мы принимаем оплату
          платежными картами Visa и Mastercard. Безопасность
          проведения платежей у нас гарантирована системой
          eCommerceConnect с использованием современного стандарта
          «3-D Secure».
        </Typography>
        <Typography variant="sm" bold uppercase>
          Доставка
        </Typography>
        <Typography variant="sm" bold>
          На отделение «Нова Пошта»
        </Typography>
        <Typography variant="sm">
          Доставка заказов клиентам интернет-магазина ALLEGRIA
          осуществляется по территории всей Украины курьерской службой
          "Нова пошта".
        </Typography>
      </div>
    </Modal>
  );
};

export default PaymentModal;
