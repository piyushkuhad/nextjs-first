import Link from 'next/link';

function ClientsPage() {
  const clients = [
    { id: 'test1', name: 'Test1' },
    { id: 'test2', name: 'Test2' },
  ];

  return (
    <div>
      <h1>Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: '/clients/[id]',
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
