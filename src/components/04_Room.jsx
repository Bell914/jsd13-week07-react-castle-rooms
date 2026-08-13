import Room from "./04_Room";

export default function Chamber() {
  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-amber-500 w-[80%]">
      <h1>Chamber</h1>
      {/* Render Room here */}
      <Room />
    </div>
  );
}