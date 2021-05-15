import Wrapper from "../_share/Wrapper/Wrapper";
import scss from './BtnsAnalitics.module.scss';

const BtnsAnalitics = ({ children }) => {
  return (
    <Wrapper className={scss}>
      {children.map(({ component: Component, ...props }) => (
        <Component className={scss.btn} key={props.title} {...props} />
      ))}
    </Wrapper>
  );
};

export default BtnsAnalitics;
