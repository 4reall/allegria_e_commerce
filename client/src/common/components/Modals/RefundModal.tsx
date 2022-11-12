import React from "react";
import Modal from "../_base/Modal/Modal";
import Typography from "../_base/Typography/Typography";

interface PaymentModalProps {
  trigger: React.ReactNode;
}

const RefundModal = ({ trigger }: PaymentModalProps) => {
  return (
    <Modal trigger={trigger}>
      <div className="flex flex-col">
        <Typography bold uppercase variant="sm" className="mb-4">
          Возврат и обмен
        </Typography>
        <Typography variant="sm" className="mb-4">
          <span>
            Возврат товаров, приобретенных в интернет-магазине
            ALLEGRIA, происходит согласно Закону Украины «О защите
            прав потребителей».
          </span>
          <br />
          <br />
          <span>
            Вы можете вернуть товар на протяжении 14 дней со дня
            покупки.
          </span>
        </Typography>
        <Typography bold variant="sm" className="mb-3">
          Как оформить заявку на возврат?
        </Typography>
        <Typography variant="sm" className="mb-3">
          Если купленная вещь Вам не понравилась или не подошла —
          свяжитесь с нашим контакт центром по телефону 000 00 000 и
          мы поможем оформить заявку на возврат.
        </Typography>
        <Typography bold variant="sm" className="mb-3">
          Какие есть условия по возврату товара?
        </Typography>
        <Typography variant="sm">
          <span>
            Обмен и возврат товара производится в том случае, если
            указанный товар не был в употреблении, полностью сохранен
            его товарный вид — без повреждений и следов ношения,
            оригинальная упаковка, а также бирки, пломбы, ярлыки,
            фирменные знаки.
          </span>
          <br />
          <br />
          <span>
            Не возвращаются и не подлежат обмену купальники, нижнее
            белье, чулочно-носочные изделия, предметы личной гигиены,
            перчатки.
          </span>
          <br />
          <br />
          <span>
            Вы можете осуществить возврат товар непосредственно в
            наших розничных магазинах, расположенных в Киеве,
            Харькове, Днепре и Одессе. Для жителей других городов
            Украины пересылка товара перевозчиком Новой Почтой или
            любым другим, на склад интернет магазина ALLEGRIA,
            расположенного в городе Харькове, осуществляется за счет
            компании.
          </span>
        </Typography>
      </div>
    </Modal>
  );
};

export default RefundModal;
