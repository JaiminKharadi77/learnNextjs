export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}) {
  const isLoggedIn = !true;
  return (
    <>
      {isLoggedIn ? (
        <div>
          <h1 className="text-xl font-semibold mb-4">{children}</h1>
          <div className="flex">
            <div className="flex flex-col mr-4">
              <div className="text-gray-700 mb-2">{users}</div>
              <div className="text-gray-700">{revenue}</div>
            </div>
            <div className="flex flex-1">{notifications}</div>
          </div>
        </div>
      ) : (
        <div>{login}</div>
      )}
    </>
  );
}
