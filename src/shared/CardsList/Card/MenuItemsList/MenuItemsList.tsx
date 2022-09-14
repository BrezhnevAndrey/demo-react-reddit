import React from 'react';
import { Dropdown } from '../../../Dropdown';
import { generateRandomString } from '../../../utils/react/generateRandomIndex';
import { CloseButton } from '../Controls/CloseButton';
import { ComplainButton } from '../Controls/ComplainButton';
import { HideButton } from '../Controls/HideButton';
import styles from './menuItemsList.less';

const LIST = [{element:<HideButton /> }, {element:<ComplainButton />}, {element:<CloseButton />}].map((item) => ({...item, id: generateRandomString()}))

export function MenuItemsList() {
  return (
    <div className={styles.menuItemsList}>
      <Dropdown button={<button>
        <svg width="20" height="5" viewBox="0 0 20 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="17.5" cy="2.5" r="2.5" transform="rotate(90 17.5 2.5)" fill="#D9D9D9"/>
          <circle cx="10" cy="2.5" r="2.5" transform="rotate(90 10 2.5)" fill="#D9D9D9"/>
          <circle cx="2.5" cy="2.5" r="2.5" transform="rotate(90 2.5 2.5)" fill="#D9D9D9"/>
        </svg>
        </button>}>
      </Dropdown>
    </div>
  );
}
