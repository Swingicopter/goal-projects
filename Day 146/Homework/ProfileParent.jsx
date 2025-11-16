import Profile from "./Profile";

function ProfileParent() {
  return (
    <div>
      <Profile
        name="Mia"
        age={28}
        city="Berlin"
        bgColor="lavender"
        hobby="Photography"
      />

      <Profile
        name="Noah"
        age={33}
        city="Rome"
        bgColor="honeydew"
      />
    </div>
  );
}

export default ProfileParent;