import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
const SingleItem = (catagoryName) => (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={catagoryName.catagoryImageURL} style={{ height: "6rem"}} />}
  >
    <Meta title={catagoryName.catagoryName.toUpperCase()} style={{height:"2rem", fontSize:"12px"}}  />
  </Card>
);
export default SingleItem;
