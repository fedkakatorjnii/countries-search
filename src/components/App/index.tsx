import React, { useEffect } from "react";
import { Layout } from "antd";

import { useDispatch } from "react-redux";
import { setFavorites } from "../../store/api/actions";

import { Row, Col } from "antd";

const { Content } = Layout;

import { SearchForm } from "../SearchForm";
import { Favorites } from "../Favorites";
import { MainContent } from "../MainContent";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const favorites = localStorage.getItem("favorites");
    if (favorites !== null) {
      const localFavorites = JSON.parse(favorites);
      if (Array.isArray(localFavorites)) {
        dispatch(setFavorites(localFavorites));
      }
    }
  }, []);

  return (
    <Content className="MainContent">
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <SearchForm />
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <MainContent />
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <Favorites />
        </Col>
      </Row>
    </Content>
  );
};
