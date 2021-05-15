import { useHistory } from "react-router-dom";
import Button from "../_share/Button/Button";

const BtnHistoryPush = ({ location, title }) => {
  const { push } = useHistory();
  const handleGoBack = () => {
    push(location);
  };
  return <Button title={title} cbOnClick={handleGoBack} />;
};

export default BtnHistoryPush;
