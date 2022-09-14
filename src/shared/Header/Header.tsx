import React from 'react';
import { useUserData } from '../../hooks/useUserData';
import styles from './header.less';
import { SearchBlock } from './SearchBlock';
import { UserBlock } from './SearchBlock/UserBlock';
import { SortBlock } from './SortBlock';
import { ThreadTitle } from './ThreadTitle';

export function Header() {
  const { data, loading } = useUserData();
  return (
    <div className={styles.header}>   
      <ThreadTitle />
      <SortBlock />
      <SearchBlock />
      <UserBlock avatarSrc={data.iconImg} userName={data.name} loading={loading}/>
    </div>
  );
}
