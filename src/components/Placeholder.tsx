import { LucideMessageSquareWarning } from 'lucide-react';

interface IPlaceholderProps {
  label: string;
  icon?: React.ReactElement;
  button?: React.ReactNode;
}

function Placeholder({
  label,
  icon = <LucideMessageSquareWarning className="w-14 h-14" />,
  button = <div className="h-10" />,
}: IPlaceholderProps) {
  return (
    <div className="flex-1 self-center flex flex-col items-center justify-center gap-y-2">
      {/* {cloneElement(icon, {
        className: 'w-16 h-16',
      })} */}
      {icon}
      <h2 className="text-lg text-center">{label}</h2>
      {button}
    </div>
  );
}
export default Placeholder;
