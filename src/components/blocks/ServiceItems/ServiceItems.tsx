import React from "react";
import { Button } from "@/components/Button";
// import {} from "@/components/Icons";

// TODO: adding typing items
export const ServiceItems = ({ items }: { items: any[] }) => {
  return (
    <div className="flex flex-wrap">
      {items.length > 0 &&
        items.map((item, i) => {
          return (
            <div
              key={i}
              className="relative flex flex-col justify-center items-center
            w-full xs:w-[50%] sm:w-[25%] sm:flex-1
            py-8 px-6 bg-white/90 rounded-sm
            after:absolute after:right-0 after:h-20 after:w-1 after:border-0 after:border-red-400
            after:xs:odd:border-r
            after:sm:border-r after:sm:last:border-r-0"
            >
              {/*<IconByName iconId={item.iconId} />*/}
              <h6 className={"mt-7 text-grey-500"}>{item.title}</h6>
              <p className={"my-3 text-center text-grey-400"}>{item.text}</p>
              <div className={"mt-auto"}>
                <Button size="sm" color="red">
                  Read more
                </Button>
              </div>
            </div>
          );
        })}
    </div>
  );
};
