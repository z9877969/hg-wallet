import scss from "./Wrapper.module.scss";

const Wrapper = ({ children, className = null }) => {
  return (
    <section
      className={className?.main ? scss.main + " " + className.main : scss.main}
    >
      <div
        className={
          className?.container
            ? scss.container + " " + className.container
            : scss.container
        }
      >
        {children}
      </div>
    </section>
  );
};

export default Wrapper;
