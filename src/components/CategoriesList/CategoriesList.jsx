import Button from "../_share/Button/Button";
import LabelInput from "../_share/LabelInput/LabelInput";
import Title from "../_share/Title/Title";

const CategoriesList = ({
  handleChangeCategory,
  catOptions,
  history,
  location,
}) => {
  const handleClickCategory = ({ id, title }) => {
    handleChangeCategory({ id, title });
    handleGoBack();
  };

  const handleGoBack = () => history.push(location.state?.from || "/");

  return (
    <>
      <Button title="GoBack" cbOnClick={handleGoBack} />
      <Title title="Категории" />
      <ul>
        {catOptions.map(({ id, title }) => (
          <li key={id}>
            <span onClick={() => handleClickCategory({ id, title })}>
              {title}
            </span>
            <Button title="..." />
          </li>
        ))}
      </ul>
      <form>
        <LabelInput placeholder="Новая категория" />
        <Button title="+" type="submit" />
      </form>
    </>
  );
};

export default CategoriesList;
