import React from "react";
import Button from "@/components/Button";

// TODO: adding typing items
const ListService = ({ items }: { items: any[] }) => {
  return (
    <div className="flex flex-wrap">
      {items.length &&
        items.map((item, i) => {
          return (
            <div
              className="flex-1 min-w-[200px] w-[300px] h-[300px] bg-white/90 border border-red-400"
              key={i}
            >
              <h6>{item.title}</h6>
              <p>{item.text}</p>
              <Button size="sm" color="red">
                Read more
              </Button>
            </div>
          );
        })}
    </div>
  );
};

export default ListService;
