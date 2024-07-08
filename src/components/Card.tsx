import { Booking, Consumption } from "../types";
import Circulars from "./Circulars";
import HorizontalProgress from "./Horizontal";

function Card({
  bookingCard,
  consumption,
}: {
  bookingCard: Booking;
  consumption?: Consumption[] | null;
}) {
  const calculateDurationInHours = (
    startTime: string,
    endTime: string
  ): number => {
    const start = new Date(startTime).getTime();
    const end = new Date(endTime).getTime();
    return (end - start) / (1000 * 60 * 60);
  };

  const usageDuration = calculateDurationInHours(
    bookingCard.bookingDate,
    bookingCard.endTime
  );
  const roomUsagePercentage = (usageDuration * 24) / 100;

  return (
    <div className="bg-white border border-gray-200 rounded-md shadow-lg p-4">
      <p className="text-lg font-semibold text-gray-900">
        {bookingCard.roomName}
      </p>

      <div className="mt-5 mb-10 flex justify-between items-center">
        <div>
          <p className="text-base text-gray-700">Presentase Pemakaian</p>
          <h2 className="font-bold text-2xl">
            {roomUsagePercentage.toFixed(2)}%
          </h2>
        </div>
        <Circulars
          percentage={roomUsagePercentage.toFixed(2)}
          size={50}
          strokeWidth={8}
        />
      </div>

      <div>
        <p className="text-base text-gray-700">Nominal Konsumsi</p>
        {consumption?.map((item, index) => (
          <div key={index} className="flex justify-between text-sm mt-2">
            <h2>{item.name}</h2>
            <div className="items-center">
              <div>{item.maxPrice}</div>
              <HorizontalProgress percentage={item.maxPrice} width={100} height={10} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
