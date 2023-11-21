import PageContent from '@/common/components/PageContent';
import {
  ProfileDescription,
  ProfileDownloadCV,
  ProfileImage,
  ProfileJobTitle,
  ProfileName,
} from '@/components/Pages/ProfilePage/Profile.styled';
import photo from '@/assets/images/profile/photo.jpg';
import { getExperienceYears } from '@/components/Pages/ProfilePage/Profile.utils';
import ProfileAbout from '@/components/Pages/ProfilePage/Profile.About';
import ProfileContacts from '@/components/Pages/ProfilePage/Profile.Contacts';

function ProfilePage() {
  const experience = getExperienceYears();

  return (
    <PageContent centered>
      <ProfileImage>
        <img src={photo} alt="Maksim Makrenko" />
      </ProfileImage>

      <ProfileName>Maksim Makarenko</ProfileName>
      <ProfileJobTitle>Frontend Developer</ProfileJobTitle>

      <ProfileDescription>
        Hi, I&apos;m Maksim Makarenko, and I&apos;m highly skilled and motivated
        Frontend Developer with more than {experience} years of experience in developing
        user-friendly and responsive web applications on such framework as React.
      </ProfileDescription>

      <ProfileAbout />
      <ProfileContacts />

      <ProfileDownloadCV>
        <span />
        <span />
        <span />
        <span />
        Download CV
      </ProfileDownloadCV>
    </PageContent>
  );
}

export default ProfilePage;
