import EmbTools from '@/components/Pages/Experience/IotechaEmbedded/Emb.Tools';
import KlikaHeader from '@/components/Pages/Experience/KlikaInternal/Klika.Header';
import KlikaDescription from '@/components/Pages/Experience/KlikaInternal/Klika.Description';
import KlikaResponsibilities from '@/components/Pages/Experience/KlikaInternal/Klika.Responsibilities';
import EmbResponsibilities2 from '@/components/Pages/Experience/IotechaEmbedded/Emb.Responsibilities2';

function Part3() {
  return (
    <>
      <EmbResponsibilities2 />
      <EmbTools />

      <KlikaHeader />
      <KlikaDescription />
      <KlikaResponsibilities />
    </>
  );
}

export default Part3;
