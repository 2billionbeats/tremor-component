import { Bar } from "@/components/Bar/Bar";

export default function Home({}) {
  return (
    <>
      <div className="flex w-1/2 flex-col space-y-10">
        <h1 className="text-lg text-white">有上下限</h1>
        <Bar max={17.4} min={12.5} cursor={14} />
        <Bar max={25} min={26} cursor={25.1} />

        <Bar max={30} min={10} cursor={39} />
      </div>
    </>
  );
}
