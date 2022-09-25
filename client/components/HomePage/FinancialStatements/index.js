import OptionsContainer from '../OptionsContainer';
import Option from '../Option';

const FinancialStatements = () => {
  return (
    <OptionsContainer name="Financial Statements">
      <div className={`col-2 homePageButtonSpacing`}>
        <Option name="Trial Balance" />
        <Option name="Income Statement" />
      </div>
      <div className={`col-2 homePageButtonSpacing`}>
        <Option name="Aged Trial Balance" />
        <Option name="Balance Sheet" />
      </div>
    </OptionsContainer>
  )
}

export default FinancialStatements;