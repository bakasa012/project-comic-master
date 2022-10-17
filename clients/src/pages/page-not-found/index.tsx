import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';
const PageNotFound = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" shape="round">
          <Link to={'/'}>Back Home</Link>
        </Button>
      }
    />
  );
};

export default PageNotFound;
