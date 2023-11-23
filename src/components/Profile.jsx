import { ProfileCard } from "./ProfileCard";
import { ProfileDetails } from "./ProfileDetails";

export const Profile = () => {
  return (
    <div className="flex flex-col md:gap-10 md:items-start md:justify-start md:flex-row px-5">
      <ProfileCard />

      <ProfileDetails />
    </div>
  );
};
