import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  setFavorites,
  fetchListCountries,
  setSeatchCountry,
} from "../../store/api/actions";
import { Card, Avatar, List } from "antd";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";

const { Meta } = Card;

interface Props {}

export const CountryInformation = (props: Props) => {
  const dispatch = useDispatch();
  const countries = useSelector((state: RootState) => state.api.countries);
  const active = useSelector((state: RootState) => state.api.active);
  const favorites = useSelector((state: RootState) => state.api.favorites);

  const handlerSeatchCountry = useCallback(
    (value: string) => {
      if (typeof value === "string") {
        dispatch(setSeatchCountry(value));
        dispatch(fetchListCountries(value));
      }
    },
    [dispatch]
  );

  const country = useMemo(() => {
    if (countries.length === 1) {
      return countries[0];
    }
    if (active !== undefined) {
      return countries.find((country) => country.name === active);
    }
  }, [countries, active]);

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

  const actions = useMemo(() => {
    if (country === undefined) {
      return;
    }

    const { name } = country;

    if (favorites.includes(name)) {
      return [
        <DislikeOutlined
          key="dislike"
          onClick={() => handlerSetFavorite(name)}
        />,
      ];
    }

    return [
      <LikeOutlined key="like" onClick={() => handlerSetFavorite(name)} />,
    ];
  }, [favorites, country]);

  if (country) {
    return (
      <Card style={{ width: "100%" }} loading={false} actions={actions}>
        <Meta
          avatar={<Avatar src={country.flag} />}
          title={country.name}
          description={
            <>
              <p>Код: {country.alpha3Code}</p>
              <p>Язык: {country.languages[0].name}</p>
              <p>Граничит с: </p>
              <List
                size="small"
                header={<div>Граничит с: </div>}
                bordered
                dataSource={country.borders}
                renderItem={(item) => (
                  <List.Item
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={() => handlerSeatchCountry(item)}
                  >
                    {item}
                  </List.Item>
                )}
              />
            </>
          }
        />
      </Card>
    );
  }
  return <></>;
};
