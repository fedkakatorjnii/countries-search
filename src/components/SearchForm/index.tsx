import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "antd";

import { fetchListCountries, setSeatchCountry } from "../../store/api/actions";
import { RootState } from "../../store";

interface Props {}

export const SearchForm = (props: Props) => {
  const dispatch = useDispatch();
  const seatchCountry = useSelector(
    (state: RootState) => state.api.seatchCountry
  );

  const handlerSeatchCountry = useCallback(
    (value: string) => {
      if (typeof value === "string") {
        dispatch(setSeatchCountry(value));
        dispatch(fetchListCountries(value));
      }
    },
    [dispatch]
  );

  return (
    <Input
      placeholder="Введите название страны"
      value={seatchCountry}
      onChange={(event) => {
        handlerSeatchCountry(event.target.value);
      }}
    />
  );
};
