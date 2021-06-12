import Button from "../_share/Button/Button";
import LabelInput from "../_share/LabelInput/LabelInput";
import Title from "../_share/Title/Title";
import getFormSets from "../../assets/options/transactionFormSets";

const TransactionForm = ({
  handleSubmit,
  handleGoBack,
  handleChange,
  handleOpenCategoryList,
  dataForm,
}) => {
  // const { date, time, category, sum, currency, comment } = dataForm;
  console.log(dataForm);
  return (
    <form onSubmit={handleSubmit}>
      <Title title="TransactionPage" />

      <Button title="GoBack" cbOnClick={handleGoBack} />
      <Title />
      <Button title="OK" type="submit" />
      {getFormSets({
        data: dataForm,
        handleChange,
        handleClick: handleOpenCategoryList,
      }).map((data) => (
        <>
          {console.log(data)}
          <LabelInput
            key={data.name}
            type={data.type}
            title={data.title}
            name={data.name}
            value={data.value}
            cbOnChange={data.cbOnChange}
            cbOnClick={data.cbOnClick}
          />
        </>
      ))}
    </form>
  );
};

export default TransactionForm;

{
  /* <LabelInput
        type="date"
        title="День"
        name="date"
        value={date}
        cbOnChange={handleChange}
      />

      <LabelInput
        type="time"
        title="Время"
        name="time"
        value={time}
        cbOnChange={handleChange}
      />

      <LabelInput
        title="Категория"
        type="button"
        name="category"
        value={category.title}
        cbOnClick={handleOpenCategoryList}
      />

      <LabelInput
        title="Сумма"
        name="sum"
        value={sum}
        cbOnChange={handleChange}
        placeholder="Сумма..."
      />

      <LabelInput
        title="Валюта"
        type="button"
        name="currency"
        value={"UAH"}
        cbOnClick={() => {}}
      />

      <LabelInput
        title="Комментарий"
        name="comment"
        value={comment}
        cbOnChange={handleChange}
        placeholder="Комментарий"
      /> */
}
