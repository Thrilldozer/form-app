import React from "react";

//Types
type IProps = {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
};

const List: React.FC<IProps> = ({ people }) => {
  return <div>I am a list</div>;
};

export default List;