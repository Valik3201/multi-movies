import { ReloadIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';

export const Loader = () => {
  return (
    <Button className="my-4" disabled>
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  );
};
