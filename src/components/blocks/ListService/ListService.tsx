import React from "react";

// TODO: adding typing items
const ListService = ({ items }: { items: any[] }) => {
  return (
    <div className="flex flex-wrap">
      {items.length &&
        items.map((item, i) => {
          return (
            <div
              className="flex-1 min-w-[200px] w-[300px] h-[300px] border border-red-400"
              key={i}
            >
              {item.title}
            </div>
          );
        })}
    </div>
  );
};

export default ListService;
