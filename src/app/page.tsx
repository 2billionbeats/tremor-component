import { Bar } from "@/components/Bar/Bar";
import { Card } from "@tremor/react";

export default function Home({}) {
  return (
    <>
      <div className="flex w-1/2 flex-col space-y-10">
        <Card>
          <div className="flex justify-between pb-5 text-lg text-black">
            <p className="font-bold">成人外周血白细胞计数</p>
            <p className="font-bold">
              6.3
              <span className="pl-1 font-light">AU/ml</span>
            </p>
          </div>

          <Bar
            max={9.5}
            min={3.5}
            cursor={6.3}
            precision={1}
            className="px-4"
          />
        </Card>

        <Card>
          <div className="flex justify-between pb-5 text-lg text-black">
            <p className="font-bold">人体血小板</p>
            <p className="font-bold">
              100<span className="pl-1 font-light">AU/ml</span>
            </p>
          </div>

          <Bar max={30} min={10} cursor={100} precision={1} className="px-4" />
        </Card>
      </div>
    </>
  );
}
