

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-700 to-purple-300">{children}</div>
  );
};

export default AuthLayout;
