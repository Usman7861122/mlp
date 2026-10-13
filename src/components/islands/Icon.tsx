import { icons } from "../../data/icons";

interface Props {
  name: string;
  className?: string;
}

export default function Icon({ name, className = "h-5 w-5" }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: icons[name] ?? "" }}
    />
  );
}
