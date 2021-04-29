const MainInfo = ({ title, transId, handleToggleTransId }) => {
  return (
    <>
      <h2>{title}</h2>
      <button type="button" onClick={() => handleToggleTransId(transId)}>
        Add
      </button>
      <span>UAH</span>
      <ul>
        <li>
          <span>Период</span>
          <span>0.00</span>
        </li>
        <li>
          <span>Период</span>
          <span>0.00</span>
        </li>
        <li>
          <span>Период</span>
          <span>0.00</span>
        </li>
      </ul>
    </>
  );
};

export default MainInfo;
