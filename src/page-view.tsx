import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import './page-view.scss';

import Demo from './demo';
import Hook from './hook';

interface Menu {
  title: string,
  content: React.ReactElement,
  key: number
}

export default function PageView() {
  const [menuList, setMenuList] = useState<Menu[]>([]);
  const [nowMenu, setNowMenu] = useState<number>(0);

  useEffect(() => {
    setMenuList([
      {
        title: 'Demo',
        content: <Demo />,
        key: 1
      },
      {
        title: 'Hook',
        content: <Hook />,
        key: 2
      }
    ])
  }, [])

  return <>
    <div className='page-wrapper'>
      <div className='page-left page-menu'>
        <div className='menu-top'>主目录</div>
        {
          menuList.map((ele, ind) => {
            return <div key={ele.key}>
              <div key={ele.key} className={`menu-item`} onClick={() => setNowMenu(ind)}>
                <Button type={nowMenu === ind ? 'primary' : 'default'} block>{ele.title}</Button>
              </div>
            </div>
          })
        }
      </div>
      <div className='page-right page-content'>
        {menuList[nowMenu]?.content}
      </div>
    </div>
  </>
}
