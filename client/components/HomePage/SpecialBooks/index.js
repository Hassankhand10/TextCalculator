import Option from '../Option';
import OptionsContainer from '../OptionsContainer';

const SpecialBooks = () => {
  return (
    <OptionsContainer name="Special Books">
      <div className="col-2 homePageButtonSpacing">
        <Option name="Assets Ledger" />
        <Option name="Expenses Ledger" />
      </div>
      <div className="col-2 homePageButtonSpacing">
        <Option name="Liabilities Ledger" />
        <Option name="Revenue Ledger" />
      </div>

      <div className="col-2 homePageButtonSpacing">
        <Option name="Capital Ledger" />
        <Option name="Stock Ledger" />
      </div>

      <div className="col-2 homePageButtonSpacing">
        <Option name="Accounts Manager" />
        <Option name="Stock Manager" />
      </div>
    </OptionsContainer>
  )
}

export default SpecialBooks;