/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
function Layout({ children }): JSX.Element {
  return (
    <div className="page-layout">
      {children}
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  );
}

export default Layout;
