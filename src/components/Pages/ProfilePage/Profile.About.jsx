import { ProfileSection, ProfileSectionTitle, ProfileTable } from '@/components/Pages/ProfilePage/Profile.styled';
import { getMyAge } from '@/components/Pages/ProfilePage/Profile.utils';

function ProfileAbout() {
  const age = getMyAge();

  return (
    <ProfileSection>
      <ProfileSectionTitle>About Me</ProfileSectionTitle>
      <ProfileTable>
        <tbody>
          <tr>
            <td>Age:</td>
            <td>{age} years<span className="small">(4/18/1987)</span></td>
          </tr>
          <tr>
            <td>Location:</td>
            <td>Belarus, Minsk<span className="small">(no relocation)</span></td>
          </tr>
          <tr>
            <td>English:</td>
            <td>Intermediate (B2)</td>
          </tr>
          <tr>
            <td>Russian:</td>
            <td>Native</td>
          </tr>
          <tr>
            <td>Life position:</td>
            <td><i>Love what you do. Do what you love.</i></td>
          </tr>
        </tbody>
      </ProfileTable>
    </ProfileSection>
  );
}

export default ProfileAbout;
