import { ArrowLeft, ArrowRight, UserRound } from "lucide-react";
import PreviousMap_ from "postcss/lib/previous-map";
import { useState } from "react";

export function Reviews() {
  const [counter, setCounter] = useState(0);

  function handleIncrement(i) {
    setCounter((prev) => prev + 1);
    if (counter >= i) {
      setCounter(i);
    }
  }

  function handleDecrement() {
    setCounter((prev) => prev - 1);
    if (counter <= 0) {
      setCounter(0);
    }
  }

  const reviews = [
    { name: "Timmy Turner", date: "21. Januar", review: "It was great!" },
    {
      name: "John Doe",
      date: "28. Februar",
      review: "Det var både godt og vondt, men mest godt!",
    },
    {
      name: "Karen Lillebø",
      date: "6. September",
      review:
        "Detta kan æ virkeli anbefala! Det er så deili å endeli kunne gjøra husarbei utan å ha konstant aua i ryggjen.",
    },
  ];

  return (
    <div className="flex flex-col bg-white w-full lg:flex-row lg:h-[429px] lg:justify-center lg:items-center lg:px-[96px] lg:gap-10">
      <section className="text-main-500 mx-5 mt-8 sm:mx-10 sm:mt-16 lg:m-0">
        <h1 className="text-[48px]/[110%] font-[600] mb-5">
          Hva sier kundene?
        </h1>
        <p className="text-[16px]/150% font-[400] mb-5 xl:w-[640px]">
          Her får du hjelp til dine akutte og langvarige problemer gjennom
          manuell behandling som sørger for å minske smerte og gjenskape
          kroppens naturlige funksjon og bevegelighet. Hos oss får du time kjapt
          slik at du kommer raskt tilbake fra din skade.
        </p>
        <div className="flex justify-between h-[56px] flex flex-row mb-5 sm:justify-start sm:gap-10">
          <button className="flex justify-center items-center rounded-full shadow-2xl shadow-black w-[56px] h-[56px] transition duration-300 ease-out border-1 border-transparent hover:border-main-500 hover:cursor-pointer">
            <ArrowLeft size={40} />
          </button>
          <button className="flex justify-center items-center rounded-full shadow-2xl shadow-black w-[56px] h-[56px] transition duration-300 ease-out border-1 border-transparent hover:border-main-500 hover:cursor-pointer">
            <ArrowRight size={40} />
          </button>
        </div>
      </section>
      <section className="flex flex-col justify-between min-h-[312px] bg-main-500 text-white mt-10 mx-5 mb-20 p-5 rounded-xl sm:mx-10 sm:min-h-[240px] xl:w-[675px] lg:h-[269px] lg:m-0">
        <p>
          Kan virkelig varmt anbefale Ørjan for de som kjenner at de trenger
          litt "service"! Han har en egen evne til å få koppen på plass og i
          balanse igjen, om det er nakke, rygg, armer eller annet. Her er man i
          gode hender!
        </p>
        <div className="flex flex-row gap-3">
          <UserRound size={56} className="border-1 rounded-full" />
          <ul className="flex flex-col justify-center">
            <li>Rosie Luettgen</li>
            <li>23. October</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
