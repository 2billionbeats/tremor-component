import { Card } from "@tremor/react";

function formatNumberToPrecision(value: number, decimals: number) {
  let factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}

export function Bar({
  min,
  max,
  cursor,
  precision = 2,
}: {
  min: number;
  max: number;
  cursor: number;
  precision?: number;
}) {
  const gap = (max - min) / 4;
  const percentage = ((cursor - (min - 2 * gap)) / (gap * 8)) * 100;

  return (
    <>
      <Card>
        <div className="relative mt-6 flex h-2 w-full rounded-full bg-red-500">
          <div className="relative h-2 w-[12.5%] rounded-s-full bg-orange-500">
            <span className="absolute -left-3 -top-5 text-xs text-[#70757e]">
              {formatNumberToPrecision(min - gap * 2, precision)}
            </span>
          </div>
          <div className="relative h-2 w-[12.5%] bg-yellow-500">
            <span className="absolute -left-3 -top-5 text-xs text-[#70757e]">
              {formatNumberToPrecision(min - gap, precision)}
            </span>
          </div>
          <div className="relative h-2 w-1/2 bg-green-500">
            <span className="absolute -left-3 -top-5 text-xs text-[#70757e]">
              {formatNumberToPrecision(min, precision)}
            </span>
          </div>
          <div className="relative h-2 w-[12.5%] bg-yellow-500">
            <span className="absolute -left-3 -top-5 text-xs text-[#70757e]">
              {formatNumberToPrecision(max, precision)}
            </span>
          </div>
          <div className="relative h-2 w-[12.5%] rounded-e-full bg-orange-500">
            <span className="absolute -left-3 -top-5 text-xs text-[#70757e]">
              {formatNumberToPrecision(max + gap, precision)}
            </span>
          </div>
          <span className="absolute -right-3 -top-5 text-xs text-[#70757e]">
            {formatNumberToPrecision(max + 2 * gap, precision)}
          </span>

          <i
            className="group absolute -top-1 box-content h-4 w-1 cursor-pointer rounded-full outline outline-[3px]"
            style={{
              left: `calc(${percentage}%)`,
              backgroundColor:
                percentage < 12.5 || percentage > 87.5
                  ? "rgb(249 115 22)"
                  : percentage < 25 || percentage > 75
                    ? " rgb(234 179 8)"
                    : "rgb(34 197 94)",
            }}
          >
            <div className="absolute -left-7 -top-10 hidden items-center justify-center rounded-lg border border-[#797a7c72] bg-white px-4 py-1 not-italic text-[#70757e] shadow-lg group-hover:flex">
              {formatNumberToPrecision(cursor, precision)}
            </div>
          </i>
        </div>
      </Card>
    </>
  );
}
