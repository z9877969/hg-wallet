import Wrapper from "../_share/Wrapper/Wrapper";
import scss from "./MainInfo.module.scss";

const MainInfo = ({ title, categoryId, handleOpenTransaction }) => {
  return (
    <Wrapper>
      <table className={scss.table}>
        <tr className={scss.row}>
          <th className={scss.title}>{title}</th>
          <th className={scss.currency}>UAH</th>
        </tr>
        <tr className={scss.row + " " + scss.border}>
          <td className={scss.period}>Период</td>
          <td className={scss.total}>0.00</td>
        </tr>
        <tr className={scss.row + " " + scss.border}>
          <td className={scss.period}>Период</td>
          <td className={scss.total}>0.00</td>
        </tr>
        <tr className={scss.row + " " + scss.border}>
          <td className={scss.period}>Период</td>
          <td className={scss.total}>0.00</td>
        </tr>
      </table>
      <button
        className={scss.btn}
        type="button"
        onClick={() => handleOpenTransaction(categoryId)}
      >
        Add
      </button>
    </Wrapper>
  );
};

export default MainInfo;
