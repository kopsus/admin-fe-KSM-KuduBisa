import TableLayoutTemplate from '../../../_global/components/Tables/TableLayoutTemplate';
import TableBodyMasyarakat from './TableBodyMasyarakat';
import TableHead from './TableHead';
import TableBodyAgen from './TableBodyAgen';
import TableBodyPengepul from './TableBodyPengepul';
import { useAtom } from 'jotai';
import { ServiceActiveTab } from '../../store';

const TableLayout = () => {
  const [activeTab, setActiveTab] = useAtom(ServiceActiveTab);

  return (
    <>
      <TableLayoutTemplate>
        <div className="flex items-center justify-between">
          <div role="tablist" className="tabs tabs-lifted tabs-lg mx-3">
            <a
              onClick={() => setActiveTab({ name: 'Masyarakat' })}
              role="tab"
              className={`tab ${activeTab.name === 'Masyarakat' ? 'tab-active' : 'dark:text-white'}`}
            >
              Masyarakat
            </a>
            <a
              onClick={() => setActiveTab({ name: 'Agen' })}
              role="tab"
              className={`tab ${activeTab.name === 'Agen' ? 'tab-active' : 'dark:text-white'}`}
            >
              Agen
            </a>
            <a
              onClick={() => setActiveTab({ name: 'Pengepul' })}
              role="tab"
              className={`tab ${activeTab.name === 'Pengepul' ? 'tab-active' : 'dark:text-white'}`}
            >
              Pengepul
            </a>
          </div>
          <label className="input input-bordered flex items-center gap-2  md:w-1/3 m-3 text-black bg-white">
            <input
              type="text"
              className="grow"
              placeholder="Search"
              name="search"
              onChange={(e) => console.log(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-6 w-6 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <TableHead />
            {activeTab.name === 'Masyarakat' ? (
              <TableBodyMasyarakat />
            ) : activeTab.name === 'Agen' ? (
              <TableBodyAgen />
            ) : (
              <TableBodyPengepul />
            )}
          </table>
        </div>
      </TableLayoutTemplate>
    </>
  );
};

export default TableLayout;
