export default ({ data, handleChange, handleClick }) => [
  {
    type: "date",
    title: "День",
    name: "date",
    value: data.date,
    cbOnChange: handleChange,
  },

  {
    type: "time",
    title: "Время",
    name: "time",
    value: data.time,
    cbOnChange: handleChange,
  },

  {
    type: "button",
    title: "Категория",
    name: "category",
    value: data.category["title"],
    cbOnClick: handleClick, // handleOpenCategoryList
  },

  {
    title: "Сумма",
    name: "sum",
    value: data.sum,
    cbOnChange: handleChange,
    placeholder: "Сумма...",
  },

  {
    type: "button",
    title: "Валюта",
    name: "currency",
    value: "UAH",
    cbOnClick: () => {},
  },

  {
    title: "Комментарий",
    name: "comment",
    value: data.comment,
    cbOnChange: handleChange,
    placeholder: "Комментарий",
  },
];
