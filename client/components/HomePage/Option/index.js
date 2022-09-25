import style from './index.module.scss';

const Option = (props) => {
  return (
    <div className={style.option}>
      {props.name}
    </div>
  );
}

export default Option;