import BtnsAnalitics from "../BtnsAnalitics/BtnsAnalitics";
import MainInfo from "../MainInfo/MainInfo";
import Button from "../_share/Button/Button";
import Wrapper from "../_share/Wrapper/Wrapper";

const MainPage = ({ handleToggleTransId }) => {
  return (
    <>
      <h1>MainPage</h1>
      <MainInfo
        title="Расходы"
        transId="costs"
        handleToggleTransId={handleToggleTransId}
      />
      <MainInfo
        title="Доходы"
        transId="incomes"
        handleToggleTransId={handleToggleTransId}
      />
      <MainInfo title="Баланс" />
      <BtnsAnalitics>
        {[
          { component: Button, title: "Все расходы" },
          { component: Button, title: "Все доходы" },
        ]}
      </BtnsAnalitics>
    </>
  );
};

export default MainPage;
