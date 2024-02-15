import { ReloadIcon } from "@radix-ui/react-icons";

/**
 * Loader component to display a loading indicator.
 * @returns {JSX.Element} The JSX representation of the Loader component.
 */
export const Loader = () => {
  return (
    <div className="flex items-center text-sm text-muted-foreground py-4">
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      Loading...
    </div>
  );
};
