import Button from "../_share/Button/Button";
import LabelInput from "../_share/LabelInput/LabelInput";
import Title from "../_share/Title/Title";

const CategoriesList = ({
  handleToggleCategoryList,
  handleChangeCategory,
  catOptions,
}) => {
  const handleClickCategory = ({ id, title }) => {
    handleChangeCategory({ id, title });
    handleToggleCategoryList();
  };

  return (
    <>
      <Button title="GoBack" cbOnClick={handleToggleCategoryList} />
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
