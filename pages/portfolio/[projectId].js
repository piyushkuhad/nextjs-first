import { useRouter } from 'next/router';

function PortfolioProjectPage() {
  const router = useRouter();

  console.log(router.query.projectId);

  return (
    <div>
      <h1>The Portfolio project page</h1>
    </div>
  );
}

export default PortfolioProjectPage;
