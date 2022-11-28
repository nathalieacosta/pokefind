export default function Mainview({children}) {
  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col h-auto basis-11/12 justify-center text-center text-white p-4">
        {children}
      </div>
    </div>
  );
}
