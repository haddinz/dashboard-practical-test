import { useEffect, useState } from "react";
import { Card, EmptyDataScreen, Footer, Header, Loading } from "./components";
import { Months, getApiBooking, getApiConsumption } from "./utils";
import { Booking, Consumption } from "./types";

function App() {
  const [summaryBooking, setSummaryBooking] = useState<Booking[] | null>(null);
  const [summaryConsumption, setSummaryConsumption] = useState<
    Consumption[] | null
  >(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [periode, setPeriode] = useState<number>(1);

  const urlBooking =
    "https://66876cc30bc7155dc017a662.mockapi.io/api/dummy-data/bookingList";

  const urlConsumption =
    "https://6686cb5583c983911b03a7f3.mockapi.io/api/dummy-data/masterJenisKonsumsi";

  const filterByMonth = (data: Booking[], month: number) => {
    return data.filter((item) => {
      const bookingDate = new Date(item.bookingDate);
      return bookingDate.getMonth() + 1 === month;
    });
  };

  const fetchDataBooking = async () => {
    try {
      const getDataBooking = await getApiBooking(urlBooking);
      const filterData = filterByMonth(getDataBooking, periode);
      setSummaryBooking(filterData);
      setLoading(false);
    } catch (err) {
      setLoading(true);
      console.log(err);
    }
  };

  const fetchDataConsumption = async () => {
    setLoading(true);
    try {
      const getDataConsumtion = await getApiConsumption(urlConsumption);
      setSummaryConsumption(getDataConsumtion);
      setLoading(false);
    } catch (err) {
      setLoading(true);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDataBooking();
    fetchDataConsumption();
  }, [periode]);

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPeriode(parseInt(event.target.value));
  };

  return (
    <section className="px-4 xl:px-0 min-h-[100vh] w-full flex justify-center">
      <div className="container flex flex-col justify-between">
        <Header />

        <div className="h-full">
          <div className="mb-4 w-80">
            <label
              htmlFor="month-select"
              className="block text-base font-medium text-gray-900"
            >
              Periode
            </label>
            <select
              id="month-select"
              value={periode}
              onChange={handleMonthChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              {Months.map((month) => (
                <option key={month.value} value={month.value}>
                  {month.name}
                </option>
              ))}
            </select>
          </div>

          {loading ? (
            <Loading />
          ) : (
            <>
              {summaryBooking?.length == 0 ? (
                <EmptyDataScreen>Booking tidak ditemukan...</EmptyDataScreen>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {summaryBooking?.map((summary) => (
                    <div key={summary.id}>
                      <Card
                        bookingCard={summary}
                        consumption={summaryConsumption}
                      />
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        <Footer />
      </div>
    </section>
  );
}

export default App;
