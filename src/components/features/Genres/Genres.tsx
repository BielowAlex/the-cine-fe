import React, { FC } from "react";

const Genres: FC = () => {
  return (
    <select
      name="genre"
      className="bg-black text-amber-500 border-amber-500 border p-1 rounded-md"
    >
      <option value="value">Comedy</option>
    </select>
  );
};

export { Genres };
