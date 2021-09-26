import { useRouter } from 'next/router';

function SelectedClientProjectPage() {
  const router = useRouter();

  console.log('router', router.query);

  return (
    <div>
      <h1>Selected Client Project Page {router.query.clientProjectId}</h1>
    </div>
  );
}

export default SelectedClientProjectPage;
