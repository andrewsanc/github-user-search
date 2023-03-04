import { IoLocationSharp, IoBusinessSharp } from "react-icons/io5";
import { FaTwitter, FaLink } from "react-icons/fa";

export default function ProfileCard(props) {
  const { userData } = props;
  console.log(userData);

  return (
    <div className='profile-card'>
      {userData === null ? (
        <h2>Loading profile...</h2>
      ) : userData.message ? (
        <h2>Profile {userData.message}</h2>
      ) : (
        <>
          <div className='profile-header'>
            <img className='profile-avatar' src={userData.avatar_url} />
            <div className='profile-data fgrow'>
              <h1>{userData.name}</h1>
              <h4>Joined {formatDate(userData.created_at)}</h4>
              <h3>@{userData.login}</h3>
              <h4>
                {userData.bio === null
                  ? "This profile has no bio"
                  : userData.bio}
              </h4>
            </div>
          </div>
          <div className='profile-stats m'>
            <div className='flex-col'>
              <h4>Repos</h4>
              <h2>{userData.public_repos}</h2>
            </div>
            <div className='flex-col'>
              <h4>Followers</h4>
              <h2>{userData.followers}</h2>
            </div>
            <div className='flex-col'>
              <h4>Following</h4>
              <h2>{userData.following}</h2>
            </div>
          </div>
          <div className='profile-socials m'>
            <div className='flex-col'>
              <div className='profile-social'>
                <IoLocationSharp />
                <div>{userData.location}</div>
              </div>
              <div className='profile-social'>
                <FaTwitter />
                <div>
                  {userData.twitter_username
                    ? userData.twitter_username
                    : "No Twitter username"}{" "}
                </div>
              </div>
            </div>
            <div className='flex-col'>
              <div className='profile-social'>
                <FaLink />
                <a href={userData.blog}>
                  {userData.blog ? userData.blog : "Not Available"}
                </a>
              </div>
              <div className='profile-social'>
                <IoBusinessSharp />
                <div>{userData.company ? userData.company : ""}</div>
              </div>
              <div className='flex-col'></div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function formatDate(value) {
  let date = new Date(value);
  const day = date.toLocaleString("default", { day: "2-digit" });
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.toLocaleString("default", { year: "numeric" });
  return day + " " + month + " " + year;
}
