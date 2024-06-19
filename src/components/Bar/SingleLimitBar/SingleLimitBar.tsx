import { formatNumberToPrecision } from "../util";

function SingleLimitBarMin({
  min,
  cursor,
  precision = 2,
  className,
}: {
  min: number;
  cursor: number;
  precision?: number;
  className?: string;
}) {
  const percentage = (cursor / (min! * 2)) * 100;
  const isOverrun = cursor > min! * 2;

  return (
    <>
      <div className={className}>
        <div className="relative mt-6 flex h-2 w-full items-center justify-center rounded-full bg-red-500">
          <div className="relative h-2 w-1/4 rounded-s-full bg-orange-500">
            <span className="absolute -left-3 -top-5 text-xs text-[#70757e]">
              {formatNumberToPrecision(0, precision)}
            </span>
          </div>
          <div className="relative h-2 w-1/4 bg-yellow-500">
            <span className="absolute -left-3 -top-5 text-xs text-[#70757e]">
              {formatNumberToPrecision(min! / 2, precision)}
            </span>
          </div>
          <div
            className="relative h-2 w-1/2 rounded-e-full bg-green-500"
            style={{ width: isOverrun ? "100%" : "50%" }}
          >
            <span className="absolute -left-3 -top-5 text-xs text-[#70757e]">
              {formatNumberToPrecision(min!, precision)}
            </span>
          </div>

          <i
            className="group absolute -top-1 box-content h-4 w-1 cursor-pointer rounded-full outline outline-[3px]"
            style={{
              left: isOverrun ? "90%" : `${percentage}%`,
              backgroundColor:
                percentage < 25
                  ? "rgb(249 115 22)"
                  : percentage < 50
                    ? " rgb(234 179 8)"
                    : "rgb(34 197 94)",
            }}
          >
            <div className="absolute -left-7 -top-10 hidden items-center justify-center rounded-lg border border-[#797a7c72] bg-white px-4 py-1 not-italic text-[#70757e] shadow-lg group-hover:flex">
              {formatNumberToPrecision(cursor, precision)}
            </div>
          </i>
        </div>
      </div>
    </>
  );
}

function SingleLimitBarMax({
  max,
  cursor,
  precision = 2,
  className,
}: {
  max: number;
  cursor: number;
  precision?: number;
  className?: string;
}) {
  const percentage = (cursor / (max * 2)) * 100;
  const isOverrun = cursor > max * 2;

  return (
    <>
      <div className={className}>
        <div className="relative mt-6 flex h-2 w-full items-center justify-center rounded-full bg-red-500">
          <div
            className="relative h-2 rounded-s-full bg-green-500"
            style={{ width: isOverrun ? "10%" : "50%" }}
          >
            <span className="absolute -left-3 -top-5 text-xs text-[#70757e]">
              {formatNumberToPrecision(0, precision)}
            </span>
          </div>
          <div className="relative h-2 w-1/4 bg-yellow-500">
            <span className="absolute -left-3 -top-5 text-xs text-[#70757e]">
              {formatNumberToPrecision(max, precision)}
            </span>
          </div>
          <div className="relative h-2 w-1/4 grow rounded-e-full bg-orange-500">
            <span className="absolute -left-3 -top-5 text-xs text-[#70757e]">
              {formatNumberToPrecision(max * 1.5, precision)}
            </span>
          </div>
          <i
            className="group absolute -top-1 box-content h-4 w-1 cursor-pointer rounded-full outline outline-[3px]"
            style={{
              left: isOverrun ? "90%" : `${percentage}%`,
              backgroundColor:
                percentage < 50
                  ? "rgb(34 197 94)"
                  : percentage < 75
                    ? " rgb(234 179 8)"
                    : "rgb(249 115 22)",
            }}
          >
            <div className="absolute -left-7 -top-10 hidden items-center justify-center rounded-lg border border-[#797a7c72] bg-white px-4 py-1 not-italic text-[#70757e] shadow-lg group-hover:flex">
              {formatNumberToPrecision(cursor, precision)}
            </div>
          </i>
        </div>
      </div>
    </>
  );
}

export function SingleLimitBar({
  min,
  max,
  ...arg
}: {
  min?: number;
  max?: number;
  cursor: number;
  precision?: number;
  className?: string;
}) {
  return min ? (
    <SingleLimitBarMin {...arg} min={min} />
  ) : (
    <SingleLimitBarMax {...arg} max={max!} />
  );
}
