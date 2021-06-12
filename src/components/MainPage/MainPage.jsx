import BtnsAnalitics from "../BtnsAnalitics/BtnsAnalitics";
import MainInfo from "../MainInfo/MainInfo";
import Button from "../_share/Button/Button";
import Wrapper from "../_share/Wrapper/Wrapper";

const MainPage = ({ handleTogglecategoryId, history, location }) => {
  const handleOpenTransaction = (categoryId) => {
    history.push({
      pathname: `/${categoryId}/add`,
      state: {
        from: location,
      },
    });
  };
  const handleOpenAnalitics = (categoryId) => {
    history.push({
      pathname: `/${categoryId}/list`,
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
        categoryId="costs"
        handleOpenTransaction={handleOpenTransaction}
      />
      <MainInfo
        title="Доходы"
        categoryId="incomes"
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
