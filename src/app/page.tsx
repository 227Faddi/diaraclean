import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen bg-black gap-6">
      <Image src="/diaracleanlogo.png" alt="logo" width={100} height={100} />
      <div className="text-center gap-2">
        <h1 className="text-5xl">Diara Clean - Servizi di Pulizia</h1>
        <h1 className="text-5xl">Disponibile a Breve</h1>
      </div>
      <div
        className="radial-progress"
        style={{ "--value": 0 } as React.CSSProperties}
        aria-valuenow={0}
        role="progressbar"
      >
        0%
      </div>
    </div>
  );
}
