import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import BtnHistoryPush from "../BtnHistoryPush/BtnHistoryPush";
import Button from "../_share/Button/Button";
import Title from "../_share/Title/Title";

const TransCatsListPage = ({ match, location, transactions }) => {
  const history = useHistory();
  const { categoryId } = match.params;
  const data = transactions[categoryId] || [];

  const handleOpenEditForm = (id) => {
    history.push({
      pathname: `/${categoryId}/edit/${id}`,
      state: {
        // from: location,
        from: history.location,
      },
    });
  };

  return (
    <>
      <BtnHistoryPush
        title="<<--"
        location={location.state?.from || { pathname: "/" }}
      />
      <Title title="TransCatsListPage " />
      <ul>
        {data.map(({ category: { title }, sum, date, id }) => {
          const cbArgs = [id];
          return (
            <li key={id}>
              <span>{title} | </span>
              <span>{date} | </span>
              <span>{sum}  </span>
              <Button
                title="Edit"
                cbOnClick={handleOpenEditForm}
                cbArgs={cbArgs}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => ({
  transactions: state.transactions,
});

export default connect(mapStateToProps)(TransCatsListPage);
