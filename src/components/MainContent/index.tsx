import React from "react";
import { CountryInformation } from "./CountryInformation";
import { SearchResults } from "./SearchResults";

import { Row, Col } from "antd";

interface Props {}

export const MainContent = (props: Props) => {
  return (
    <Row gutter={[0, 16]}>
      <Col span={24}>
        <CountryInformation />
      </Col>
      <Col span={24}>
        <SearchResults />
      </Col>
    </Row>
  );
};
