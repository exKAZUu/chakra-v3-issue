'use client';

export const ClientComponent: React.FC<{ children: React.ReactNode; value: unknown }> = (props) => {
  return <div>{props.children}</div>;
};
