import VehiclesClient from "./VehiclesClient";

export const metadata = {
  title: "All Vehicles | Tesla",
  description: "View all Tesla vehicles and energy products",
};

export default function Page() {
  return <VehiclesClient />;
}
