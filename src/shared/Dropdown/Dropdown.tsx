import React from "react";
import ReactDOM from "react-dom";
import styles from "./dropdown.less";

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  listClassName?: string;
  closeButtonClassName?: string;
  onOpen?: () => void;
  onClose?: () => void;
}

const NOOP = () => {};

export function Dropdown({
  button,
  children,
  isOpen,
  listClassName,
  closeButtonClassName,
  onOpen = NOOP,
  onClose = NOOP,
}: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  React.useEffect(
    () => (isDropdownOpen ? onOpen() : onClose()),
    [isDropdownOpen]
  );

  const [cordinateX, setCordinateX] = React.useState('')
  const [cordinateY, setCordinateY] = React.useState('')

  let node = null;
  if (typeof window !== "undefined") {
    node = document.querySelector("#dropdown_root");
  }
  if (!node) return null;

  return (
    <div className={styles.container}>
      <div
        onClick={(e) => {
          handleOpen();
          setCordinateX(`${e.pageX - 20}`)
          setCordinateY(`${e.pageY + 20}`)
        }}
      >
        {button}
      </div>
      {isDropdownOpen &&
        ReactDOM.createPortal(
          <div className={styles.listContainer} style={{top: +cordinateY, left: +cordinateX}}>
            <div
              className={listClassName ? listClassName : styles.list}
              // onClick={() => setIsDropdownOpen(false)}
            >
              {children}
              <button
                onClick={() => setIsDropdownOpen(false)}
                className={
                  closeButtonClassName ? closeButtonClassName : undefined
                }
              >
                Закрыть
              </button>
            </div>
          </div>,
          node
        )}
    </div>
  );
}
