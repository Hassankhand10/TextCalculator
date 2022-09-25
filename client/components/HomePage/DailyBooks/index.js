import OptionsContainer from '../OptionsContainer';
import Option from '../Option';

const DailyBooks = () => {
  return (
    <OptionsContainer name="Daily Books">
      <Option name="Purchase Invoices" />
      <Option name="Sale Invoices" />
      <div className={`col-2 homePageButtonSpacing`}>
        <Option name="Payments" />
        <Option name="Receipts" />
      </div>
      <Option name="Journal Vouchers" />
    </OptionsContainer>

  )
}

export default DailyBooks;