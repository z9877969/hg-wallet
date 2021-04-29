import MainInfo from "../MainInfo/MainInfo";
import Button from "../_share/Button/Button";

const MainPage = ({handleToggleTransId}) => {
  return (
    <>
      <h1>MainPage</h1>
      <MainInfo title="Расходы" transId="costs"  handleToggleTransId={handleToggleTransId} />
      <MainInfo title="Доходы"  transId="incomes" handleToggleTransId={handleToggleTransId}/>
      <MainInfo title="Баланс" />
      <Button title="Все расходы"/>
      <Button title="Все доходы"/>
    </>
  );
};

export default MainPage;
