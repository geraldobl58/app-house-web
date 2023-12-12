import { UserButton, auth, currentUser } from "@clerk/nextjs";

const DashboardPage = async () => {
  const user = await currentUser();
  const { userId } = auth();

  return (
    <div>
      <div>DashboardPage = {user?.firstName}</div>
      <div>user - {userId}</div>
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default DashboardPage;
