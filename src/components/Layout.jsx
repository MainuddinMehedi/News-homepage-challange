const Layout = ({ children }) => {
  return (
    <div className="flex justify-center py-9">
      <div className="w-4/5">{children}</div>
    </div>
  );
};

export default Layout;
