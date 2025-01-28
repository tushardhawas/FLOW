import { Button } from "./components/ui/button";
import useCurrentUser from "./hooks/useCurrentUser";
import useLogout from "./hooks/uselogout";
const App = () => {
  const { data, isLoading, error } = useCurrentUser();
  const logouthandler = useLogout();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error("Error fetching user data:", error);
    return null;
  }

  return (
    <div>
      {data ? (
        <div>
          <h1>Welcome, {data.name}!</h1>
          <Button
            onClick={() => logouthandler.mutate()}
            disabled={logouthandler.isLoading}
          >
            logout{" "}
          </Button>
        </div>
      ) : (
        <div>You are not logged in.</div>
      )}
    </div>
  );
};

export default App;
