import { useState } from 'react';
import MenuTable from '../../../_global/components/MenuEllipsTable/MenuTable';
import { dummyDataUser, ServiceDrawerUser } from '../../store';
import { useAtom } from 'jotai';
import { ServiceDialog } from '../../../_global/store';
import { useNavigate } from 'react-router-dom';

const TableBodyMasyarakat = () => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [, setDrawer] = useAtom(ServiceDrawerUser);
  const [, setDialog] = useAtom(ServiceDialog);
  const navigate = useNavigate();

  return (
    <tbody>
      {dummyDataUser
        .filter((value) => value.role === 'Masyarakat')
        .map((value, idx) => (
          <tr key={idx} className="hover:bg-slate-100 dark:hover:bg-slate-800">
            <td className="border-b border-[#eee] py-4 px-4 dark:border-strokedark max-w-96">
              <p className="text-black dark:text-white max-w-[95%] overflow-hidden whitespace-nowrap text-ellipsis">
                {value.Name}
              </p>
            </td>
            <td className="border-b border-[#eee] py-4 px-4 dark:border-strokedark max-w-96">
              <p className="text-black dark:text-white max-w-[95%] overflow-hidden whitespace-nowrap text-ellipsis">
                {value.RT}
              </p>
            </td>
            <td className="border-b border-[#eee] py-4 px-4 dark:border-strokedark max-w-96">
              <p className="text-black dark:text-white max-w-[95%] overflow-hidden whitespace-nowrap text-ellipsis">
                {value.NoHp}
              </p>
            </td>
            <td className="border-b border-[#eee] py-4 pr-4 dark:border-strokedark text-right">
              <MenuTable
                id={idx}
                onClickDelete={() => {
                  setDialog({
                    show: true,
                    id: value.id,
                  });
                }}
                onClickDetail={() => navigate(`/users/${value.id}`)}
                onClickUpdate={() => {
                  setDrawer({
                    type: 'UPDATE',
                    show: true,
                    data: {
                      id: value.id,
                      Name: value.Name,
                      NoHp: value.NoHp,
                      RT: value.RT,
                      role: value.role,
                    },
                  });
                }}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
              />
            </td>
          </tr>
        ))}
    </tbody>
  );
};

export default TableBodyMasyarakat;
