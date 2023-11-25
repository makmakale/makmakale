import PageContent from '@/common/components/PageContent';

function IntroPage() {
  return (
    <PageContent>
      <h1>Introduction</h1>

      <h2>Navigation</h2>
      <ul style={{ marginLeft: 20 }}>
        <li>
          You can use <i className="bx bx-left-arrow-alt" /> / <i className="bx bx-right-arrow-alt" /> buttons to
          navigate between pages.
        </li>
        <li>
          You can use <strong>Home / End</strong> key buttons to navigate to the <strong>first / last</strong> pages.
        </li>
      </ul>

      <h2>Plans</h2>
      <ul style={{ marginLeft: 20 }}>
        <li>Add Projects page with links to source code on github</li>
        <li>Add CV file for download after it will be ready</li>
      </ul>
    </PageContent>
  );
}

export default IntroPage;
