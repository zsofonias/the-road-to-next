'use client';

import Placeholder from '@/components/Placeholder';

function Error({ error }: { error: Error }) {
  console.log(error);
  return <Placeholder label={error.message || 'Something went wrong'} />;
}

export default Error;
