import { ProfileCard } from "./ProfileCard"

export const Profile = () => {
  return (
    <div className="grid grid-cols-1  px-5">
        <div className="left-wrapper ">
            <ProfileCard/>
        </div>
        <div className="right-wrapper bg-white w-full h-full">

        </div>
    </div>
  )
}
