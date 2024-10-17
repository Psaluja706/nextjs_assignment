import React from "react";
import Layout from "./Layout";
import '../app/globals.css'

const PageWrapper = ({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) => {
  return (
    <div className="flex items-center p-12 gap-6">
      <Layout />
      {children && <div className="bg-red h-full w-[80vw]">{children}</div>}
    </div>
  );
};

export default PageWrapper;
