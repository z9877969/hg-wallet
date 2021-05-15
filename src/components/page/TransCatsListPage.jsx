import { connect } from "react-redux";
import BtnHistoryPush from "../BtnHistoryPush/BtnHistoryPush";
import Button from "../_share/Button/Button";
import Title from "../_share/Title/Title";

const TransCatsListPage = ({ match, location, transactions }) => {
  const { transId } = match.params;
  const data = transactions[transId] || [];

  return (
    <>
      <BtnHistoryPush
        title="<<--"
        location={location.state?.from || { pathname: "/" }}
      />
      <Title title="TransCatsListPage " />
      <ul>
        {data.map(({ category: { title }, sum, date }) => (
          <li>
            <span>{title}</span>
            <span>{date}</span>
            <span>{sum}</span>
            <Button title=">" />
          </li>
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => ({
  transactions: state.transactions,
});

export default connect(mapStateToProps)(TransCatsListPage);
