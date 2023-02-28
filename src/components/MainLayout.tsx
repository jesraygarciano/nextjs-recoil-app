import { ReactNode } from "react";
import Head from "next/head";

type LayoutProps = {
  children: ReactNode;
  title: string;
};

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className="text-2xl font-bold">{title}</h1>
      {children}
    </div>
  );
};

export default Layout;
