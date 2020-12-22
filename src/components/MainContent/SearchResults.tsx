import React, { useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setActive } from "../../store/api/actions";

import { List, Typography, Alert } from "antd";

interface Props {}

export const SearchResults = (props: Props) => {
  const dispatch = useDispatch();
  const countries = useSelector((state: RootState) => state.api.countries);
  const active = useSelector((state: RootState) => state.api.active);
  const favorites = useSelector((state: RootState) => state.api.favorites);
  const loading = useSelector((state: RootState) => state.api.loading);
  const error = useSelector((state: RootState) => state.api.error);

  const handlerSetActive = useCallback(
    (name: string) => dispatch(setActive(name !== active ? name : undefined)),
    [active]
  );

  const isActive = useMemo(() => {
    if (favorites === undefined) {
      return;
    }
    if (countries.length === 1) {
      return countries[0].name;
    }

    return active;
  }, [countries, active, favorites]);

  if (countries.length === 1) {
    return <></>;
  }

  if (error !== undefined) {
    return <Alert message={error} type="error" />;
  }

  return (
    <List
      bordered
      dataSource={countries}
      loading={loading}
      renderItem={(item) => (
        <List.Item
          style={{
            cursor: "pointer",
          }}
          onClick={() => handlerSetActive(item.name)}
        >
          <Typography.Text mark={item.name === isActive}>
            {item.name}
          </Typography.Text>
        </List.Item>
      )}
    />
  );
};
