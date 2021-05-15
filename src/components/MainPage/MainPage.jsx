import BtnsAnalitics from "../BtnsAnalitics/BtnsAnalitics";
import MainInfo from "../MainInfo/MainInfo";
import Button from "../_share/Button/Button";
import Wrapper from "../_share/Wrapper/Wrapper";

const MainPage = ({ handleToggleTransId, history, location }) => {
  const handleOpenTransaction = (transId) => {
    history.push({
      pathname: `/${transId}/add`,
      state: {
        from: location,
      },
    });
  };
  const handleOpenAnalitics = (transId) => {
    history.push({
      pathname: `/${transId}/list`,
      state: {
        from: location,
      },
    });
  };

  return (
    <>
      <h1>MainPage</h1>
      <MainInfo
        title="Расходы"
        transId="costs"
        handleOpenTransaction={handleOpenTransaction}
      />
      <MainInfo
        title="Доходы"
        transId="incomes"
        handleOpenTransaction={handleOpenTransaction}
      />
      <MainInfo title="Баланс" />
      <BtnsAnalitics>
        {[
          {
            component: Button,
            title: "Все расходы",
            cbOnClick: handleOpenAnalitics,
            cbArgs: ["costs"],
          },
          {
            component: Button,
            title: "Все доходы",
            cbOnClick: handleOpenAnalitics,
            cbArgs: ["incomes"],
          },
        ]}
      </BtnsAnalitics>
    </>
  );
};

export default MainPage;
