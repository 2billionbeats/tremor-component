import { Bar } from "@/components/Bar/Bar";
import { Card } from "@tremor/react";

export default function Home({}) {
  return (
    <>
      <div className="flex w-1/2 flex-col space-y-10">
        <h1 className="text-lg text-white">中等差距 不超出边界</h1>
        <Card>
          <Bar max={17.4} min={12.5} cursor={14} />
        </Card>

        <h1 className="text-lg text-white">微小差距 不超出边界</h1>
        <Card>
          <Bar max={26} min={25} cursor={25.1} />
        </Card>

        <h1 className="text-lg text-white">大差距 不超出边界</h1>
        <Card>
          <Bar max={30} min={10} cursor={39} />
        </Card>

        <h1 className="text-lg text-white">微小差距 超出边界</h1>
        <Card>
          <Bar max={3} min={2} cursor={4} />
        </Card>

        <Card>
          <Bar max={3} min={2} cursor={10} />
        </Card>
      </div>
    </>
  );
}
