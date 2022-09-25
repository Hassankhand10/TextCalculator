import styling from './index.module.scss';

const Container = (props) => {
  return (
    <div className={styling.container}>
      {props.children}
    </div>
  );
}

export default Container;