import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import './page-view.scss';

import Demo from './demo';
import Hook from './hook';

interface Menu {
  title: string,
  content: React.ReactElement,
  exClas?: string
}

export default function PageView() {
  const [menuList, setMenuList] = useState<Menu[]>([]);
  const [nowMenu, setNowMenu] = useState<number>(0);

  useEffect(() => {
    setMenuList([
      {
        title: 'Demo',
        content: <Demo />
      },
      {
        title: 'Hook',
        content: <Hook />
      }
    ])
  }, [])

  return <>
    <div className='page-wrapper'>
      <div className='page-left page-menu'>
        <div className='menu-top'>主目录</div>
        {
          menuList.map((ele, ind) => {
            return <>
              <div className={`menu-item ${ele.exClas}`} onClick={() => setNowMenu(ind)}>
                <Button block>{ele.title}</Button>
              </div>
            </>
          })
        }
      </div>
      <div className='page-right page-content'>
        {menuList[nowMenu]?.content}
      </div>
    </div>
  </>
}
