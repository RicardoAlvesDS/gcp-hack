import React, { useEffect } from "react";
import { useStore } from "../../context/useStore";
import getItems from "../../utils/get";

const Items = () => {
  const { setLoader, setData, loader, data } = useStore();

  useEffect(() => {
    setLoader({ loading: true, message: "loading some data" });
    const items = [
      { id: 1, text: "test 1" },
      { id: 2, text: "test 2/3" }
    ];

    (async () => {
      const itemsData = await getItems(items);
      if (itemsData) {
        setData(itemsData);
        setLoader({ loading: false, message: "" });
      }
    })();
  }, []);

  return (
    <>
      {loader.loading && loader.message}
      {data && data.items.map(i => <p key={i.id}>{i.text}</p>)}
    </>
  );
};

export default Items;
