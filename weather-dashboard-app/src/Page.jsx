import { useContext } from "react";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { WeatherContext } from "./context";
export default function Page() {
  const { loading } = useContext(WeatherContext);
  return (
    <>
      <div className="grid place-items-center h-screen">
        <Header />
        <main>
          <section>
            {loading.state ? <p>{loading.message}</p> : <WeatherBoard />}
          </section>
        </main>
      </div>
    </>
  );
}
