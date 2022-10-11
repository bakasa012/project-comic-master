import React from 'react';
import { ConfigProvider } from 'antd';
import jaJP from 'antd/lib/locale/ja_JP';
import viVN from 'antd/lib/locale/vi_VN';
const ConfigProviderComponent = ({ children }: { children: React.ReactNode }) => {
  const locale = { jaJP, viVN };
  return <ConfigProvider locale={locale.viVN}>{children}</ConfigProvider>;
};

export default ConfigProviderComponent;
