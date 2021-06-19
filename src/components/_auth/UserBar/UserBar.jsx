import Button from "../../_share/Button/Button";

const UserBar = ({ logOut }) => {
  return (
    <>
      <Button title={"LogOut"} cbOnClick={logOut} />
    </>
  );
};

export default UserBar;
