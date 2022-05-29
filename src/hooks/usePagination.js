import {useMemo} from "react";

export const usePagination = (totalPages) => {

  return useMemo(() => {
    const pagesArray = [];

    for(let i = 0; i < totalPages; i++) {
      pagesArray.push(i + 1);
    }

    console.log(pagesArray);
    return pagesArray;
  }, [totalPages]);
}