import style from './index.module.scss';

const OptionsContainer = (props) => {
  return (
    <div className={style.container}>
      <h1>{props.name}</h1>
      {props.children}
    </div>
  );
}

export default OptionsContainer;