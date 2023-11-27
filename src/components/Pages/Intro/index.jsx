import PageContent from '@/common/components/PageContent';

function IntroPage() {
  return (
    <PageContent>
      <h1>Introduction</h1>
      <p>Hello Guest. My name is Maksim and this my version of portfolio.</p>
      <p>Hope you&apos;ll enjoy it.</p>

      <h2>Navigation</h2>
      <ul style={{ marginLeft: 20 }}>
        <li>
          You can use <i className="bx bx-left-arrow-alt" /> / <i className="bx bx-right-arrow-alt" /> buttons
          to navigate between pages.
        </li>
        <li>
          You can use <strong>Home / End</strong> key buttons to navigate to the
          <strong> first / last</strong> pages.
        </li>
      </ul>
    </PageContent>
  );
}

export default IntroPage;
