import React, { useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setFavorites } from "../../store/api/actions";

import { List, Typography } from "antd";
import { DislikeOutlined } from "@ant-design/icons";

interface Props {}

export const Favorites = (props: Props) => {
  const dispatch = useDispatch();
  const countries = useSelector((state: RootState) => state.api.countries);
  const active = useSelector((state: RootState) => state.api.active);
  const favorites = useSelector((state: RootState) => state.api.favorites);

  const isActive = useMemo(() => {
    if (favorites === undefined) {
      return;
    }
    if (countries.length === 1) {
      return countries[0].name;
    }

    return active;
  }, [countries, active, favorites]);

  const handlerSetFavorite = useCallback(
    (name: string) => {
      if (favorites.includes(name)) {
        dispatch(
          setFavorites(favorites.filter((favorite) => favorite !== name))
        );
      } else {
        dispatch(setFavorites([...favorites, name]));
      }
    },
    [favorites]
  );

  return (
    <List
      bordered
      dataSource={favorites}
      style={{
        cursor: "pointer",
      }}
      renderItem={(item, key) => (
        <List.Item
          actions={[
            <DislikeOutlined
              key="dislike"
              onClick={() => handlerSetFavorite(item)}
            />,
          ]}
        >
          <Typography.Text mark={item === isActive}>
            {key + 1} - {item}
          </Typography.Text>
        </List.Item>
      )}
    />
  );
};
