import React from "react";

interface IBlockProps {
  title: string;
  id: string;
}

const withIdKey = withKey("id");

function Feed(props: { blocks: IBlockProps[] }) {
  return <div>{props.blocks.map(withIdKey(Block))}</div>;
}

function Block(props: IBlockProps) {
  return <div>{props.title}</div>;
}

function withKey(key?: string) {
  return <E extends object, T extends React.ComponentType<E>>(component: T) =>
    (props: E, index: number) =>
      React.createElement(
        component,
        { ...props, key: key ? props[key as keyof E] : index },
        []
      );
}

// withKey withKey withKey withKey withKey

//syntheticEvent syntheticEvent syntheticEvent syntheticEvent syntheticEvent

function Input(props: { onChange: (value: string) => void; value: string }) {
  return <input value={props.value} onChange={getValue(props.onChange)} />;
}

function CheckBox(props: {
  onChange: (value: boolean) => void;
  value: boolean;
}) {
  return (
    <input
      type="checkbox"
      checked={props.value}
      onChange={(e) => props.onChange(e.currentTarget.checked)}
    />
  );
}

function PickFromSyntheticEvent<T extends HTMLElement>() {
  return <K extends keyof T>(key: K) =>
    <E extends (t: T[K]) => void>(
      fn: E //(t) => (fn) => (e) => fn(e.currentTarget[key])
    ) =>
    (e: React.SyntheticEvent<T>) =>
      fn(e.currentTarget[key]);
}

export const getValue = PickFromSyntheticEvent<HTMLInputElement>()("value");
export const getChecked = PickFromSyntheticEvent<HTMLInputElement>()("checked");

//syntheticEvent syntheticEvent syntheticEvent syntheticEvent syntheticEvent

// NotStandardLink NotStandardLink NotStandardLink NotStandardLink NotStandardLink

function NotStandardLink(props: any) {
  return <a onClick={preventDefault(stopPropagation(props.onClick))}>Hello!</a>;
}

function preventDefault<T extends (e: any) => void>(fn: T) {
  return <E extends React.SyntheticEvent<any>>(e: E) => {
    e.preventDefault();
    fn(e);
  };
}

function stopPropagation<T extends (e: any) => void>(fn: T) {
  return <E extends React.SyntheticEvent<any>>(e: E) => {
    e.stopPropagation();
    fn(e);
  };
}

// NotStandardLink NotStandardLink NotStandardLink NotStandardLink NotStandardLink
