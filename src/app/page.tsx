import { DoubleLimitBar, SingleLimitBar } from "@/components/Bar/";
import { Card } from "@tremor/react";

export default function Home({}) {
  return (
    <>
      <div className="flex w-1/2 flex-col space-y-10">
        <Card>
          <div className="flex justify-between pb-5 text-lg text-black">
            <p className="font-bold">成人外周血白细胞计数</p>
            <p className="font-bold">
              0.1<span className="pl-1 font-light">AU/ml</span>
            </p>
          </div>

          <DoubleLimitBar
            max={9.5}
            min={3.5}
            cursor={0.1}
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

          <DoubleLimitBar
            max={30}
            min={10}
            cursor={100}
            precision={1}
            className="px-4"
          />
        </Card>

        <Card>
          <div className="flex justify-between pb-5 text-lg text-black">
            <p className="font-bold">人体T淋巴数量</p>
            <p className="font-bold">
              30<span className="pl-1 font-light">AU/ml</span>
            </p>
          </div>

          <SingleLimitBar min={10} cursor={30} precision={1} className="px-4" />
        </Card>

        <Card>
          <div className="flex justify-between pb-5 text-lg text-black">
            <p className="font-bold">人体B淋巴数量</p>
            <p className="font-bold">
              15<span className="pl-1 font-light">AU/ml</span>
            </p>
          </div>

          <SingleLimitBar max={10} cursor={24} precision={1} className="px-4" />
        </Card>
      </div>
    </>
  );
}
