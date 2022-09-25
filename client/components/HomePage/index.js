import DailyBooks from './DailyBooks';
import Utilities from './Utilities';
import SpecialBooks from './SpecialBooks';
import FinancialStatements from './FinancialStatements';
import style from './index.module.scss'
import Navbar from '../Navbar';

const MainContent = () => {
  return (
    <>
      <Navbar />
      <div className={style.container}>
        <DailyBooks />
        <SpecialBooks />
        <Utilities />
        <FinancialStatements />
      </div>
    </>
  )
}

export default MainContent;