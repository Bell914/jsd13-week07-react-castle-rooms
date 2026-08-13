import Room from "./09_SecretRoom";

export default function Chamber() {
  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-amber-500 w-[80%]">
      <h1>Chamber</h1>
      {/* Render Room here */}
      <SecretRoom/>
    </div>
  );
}