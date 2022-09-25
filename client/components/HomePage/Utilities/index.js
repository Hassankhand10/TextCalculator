import Option from '../Option';
import OptionsContainer from '../OptionsContainer';

const Utilities = () => {
  return (
    <OptionsContainer name="Utilities">
      <Option name="Add/Remove Users" />
      <div className={`col-2 homePageButtonSpacing`}>
        <Option name="Backup" />
        <Option name="Restore" />
      </div>
    </OptionsContainer>
  )
}

export default Utilities;