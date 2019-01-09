import validator from "validator";
import * as actions from "../../actions";

export default [{
    name: "lastName",
    title: "Фамилия",
    type: "text",
    validator: s => validator.isLength(s, {
      min: 2
    })
  },
  {
    name: "firstName",
    title: "Имя",
    type: "text",
    validator: s => validator.isLength(s, {
      min: 2
    })
  },
  {
    name: "middleName",
    title: "Отчество",
    type: "text"
  },
  {
    name: "address",
    title: "Адрес (город, улица, дом)",
    type: "text",
    suggest: actions.suggestGet,
    validator: s => validator.isLength(s, {
      min: 10
    })
  },
  {
    name: "phone",
    title: "Телефон",
    type: "text",
    mask: ['+', '7', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/],
    // validator: s => validator.isMobilePhone(s, 'ru-RU')
    validator: s => validator.matches(s, /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/g)
  },
  {
    name: "email",
    title: "Почта",
    type: "text",
    validator: validator.isEmail
  },
  {
    name: "social",
    title: "Ссылка на аккаунт в соцсети",
    type: "text",
    validator: validator.isURL
  },
  {
    name: "helper",
    title: "Хочу помочь",
    type: "options",
    items: [
      "Я адвокат",
      "Я журналист / у меня есть личный блог",
      "У меня есть личный транспорт",
      "Я могу помочь с обзвоном волонтеров",
      "Я эколог",
      "Готов помочь с разовыми поручениями"
    ]
  },
  {
    name: "privacy",
    title: "Согласие на обработку персональных данных",
    type: "checkbox",
    validator: s => s === true
  },
  {
    name: "join",
    title: "Прошу меня принять в межрегиональную общественную организацию ЗаЧистыйКрай",
    type: "checkbox",
    validator: s => s === true
  }
]