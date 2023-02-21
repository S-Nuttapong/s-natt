import { HoverCard } from "../../../shared/components/HoverCard";

export type HowItWorksProps = {
  instruction: {
    title: string;
    steps: string[];
  };
};

const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
    />
  </svg>
);

export const HowItWorks = ({ instruction }: HowItWorksProps) => (
  <HoverCard
    title={
      <div className="text-white text-xs w-fit inline-flex gap-2 items-center justify-center bg-transparent hover:cursor-pointer">
        <div>How it works</div>
        <InfoIcon />
      </div>
    }
    configs={{
      content: {
        className:
          "max-w-md rounded-lg p-4 md:w-full bg-black border-2 border-white",
      },
      arrow: {
        className: "dark:text-white",
      },
      root: {
        openDelay: 300,
        closeDelay: 300,
      },
    }}
  >
    <div className="text-white text-sm">
      <div className="text-inherit">{instruction.title}</div>
      <ol className="list-auto list-inside pl-2">
        {instruction.steps.map((step) => (
          <li key={step} className="text-inherit">
            {step}
          </li>
        ))}
      </ol>
    </div>
  </HoverCard>
);
