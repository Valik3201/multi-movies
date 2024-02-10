import { ReloadIcon } from "@radix-ui/react-icons";

export const Loader = () => {
  return (
    <div className="flex items-center text-sm text-muted-foreground py-4">
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      Loading...
    </div>
  );
};
