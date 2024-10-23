import { Card, CardBody } from '@nextui-org/react';

export default async function Home() {
  return (
    <Card className="mx-auto mt-4 max-w-md">
      <CardBody className="text-center">
        <h1 className="text-5xl">About Page</h1>
        <br />
        <p className="text-xl">Tell everyone a little about yourself.</p>
      </CardBody>
    </Card>
  );
}
