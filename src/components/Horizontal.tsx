function HorizontalProgress({
  percentage,
  width = 300,
  height = 20,
}: {
  percentage: number;
  width: number;
  height: number;
}) {
  const roundedPercentage: number = parseInt(percentage.toFixed(0), 10);
  const resultPercentage = roundedPercentage / 100000 * 100;

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative w-full bg-gray-300 rounded"
        style={{ width, height }}
      >
        <div
          className="absolute top-0 left-0 h-full bg-green-500 rounded"
          style={{ width: `${resultPercentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default HorizontalProgress;
