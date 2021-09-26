import { useRouter } from 'next/router';

function ClientProjectsPage() {
  const router = useRouter();

  console.log('router', router.query);

  function loadProjectHandler() {
    //router.push('/clients/test1/projecta');
    //or
    router.push({
      pathname: '/clients/[id]/[clientProjectId]',
      query: { id: 'test1', clientProjectId: 'projecta' },
    });

    //use router.replace to disable going back
  }

  return (
    <div>
      <h1>Clients Project Page - {router.query.id}</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;
