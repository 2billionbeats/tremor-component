function formatNumberToPrecision(value: number, decimals: number) {
  if (value < 0) {
    return "极小";
  }
  return value.toFixed(decimals);
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

  const isOverrun = cursor > gap * 2 + max || cursor < min - gap * 2;
  const percentagePerCount = Math.abs(40 / (cursor - (max + min) / 2));

  return (
    <>
      <div className="relative mt-6 flex h-2 w-full items-center justify-center rounded-full bg-red-500">
        <div
          className="relative h-2 rounded-s-full bg-orange-500"
          style={{
            width: !isOverrun
              ? "12.5%"
              : `${(100 - 25 - (max - min) * percentagePerCount) / 2}%`,
          }}
        >
          <span className="absolute -left-3 -top-5 text-xs text-[#70757e]">
            {formatNumberToPrecision(
              !isOverrun
                ? min - gap * 2
                : (min + max) / 2 - 50 / percentagePerCount,
              precision,
            )}
          </span>
        </div>
        <div className="relative h-2 w-[12.5%] bg-yellow-500">
          <span className="absolute -left-3 -top-5 text-xs text-[#70757e]">
            {formatNumberToPrecision(
              !isOverrun ? min - gap : min - 12.5 / percentagePerCount,
              precision,
            )}
          </span>
        </div>
        <div
          className="relative h-2 bg-green-500"
          style={{
            width: !isOverrun ? "50%" : `${percentagePerCount * (max - min)}%`,
          }}
        >
          <span className="absolute -left-3 -top-5 text-xs text-[#70757e]">
            {formatNumberToPrecision(min, precision)}
          </span>
        </div>
        <div className="relative h-2 w-[12.5%] bg-yellow-500">
          <span className="absolute -left-3 -top-5 text-xs text-[#70757e]">
            {formatNumberToPrecision(max, precision)}
          </span>
        </div>
        <div
          className="relative h-2 rounded-e-full bg-orange-500"
          style={{
            width: !isOverrun
              ? "12.5%"
              : `${(100 - 25 - (max - min) * percentagePerCount) / 2}%`,
          }}
        >
          <span className="absolute -left-3 -top-5 text-xs text-[#70757e]">
            {formatNumberToPrecision(
              !isOverrun ? max + gap : max + 12.5 / percentagePerCount,
              precision,
            )}
          </span>
        </div>

        <span className="absolute -right-3 -top-5 text-xs text-[#70757e]">
          {formatNumberToPrecision(
            !isOverrun
              ? max + 2 * gap
              : max +
                  (50 - (max - min) / percentagePerCount / 2) /
                    percentagePerCount,
            precision,
          )}
        </span>

        <i
          className="group absolute -top-1 box-content h-4 w-1 cursor-pointer rounded-full outline outline-[3px]"
          style={{
            left: !isOverrun ? `${percentage}%` : cursor > max ? "90%" : "10%",
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
    </>
  );
}
