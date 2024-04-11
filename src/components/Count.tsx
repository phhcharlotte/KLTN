import React, { FC } from "react";

type Props = {
  count: number;
  increment: () => void;
};

const Count: FC<Props> = ({ count, increment }) => {
  return <div onClick={() => increment()}>{count}</div>;
};

export default Count;
