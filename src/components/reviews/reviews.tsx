import { ArrowLeft, ArrowRight, UserRound } from "lucide-react";

export function Reviews() {
  return (
    <div className="bg-white w-full">
      <section className="text-main-500 mx-5 mt-8">
        <h1 className="text-[48px]/[110%] font-[600] mb-5">
          Hva sier kundene?
        </h1>
        <p className="text-[16px]/150% font-[400] mb-5">
          Her får du hjelp til dine akutte og langvarige problemer gjennom
          manuell behandling som sørger for å minske smerte og gjenskape
          kroppens naturlige funksjon og bevegelighet. Hos oss får du time kjapt
          slik at du kommer raskt tilbake fra din skade.
        </p>
        <div className="flex justify-between h-[56px] flex flex-row mb-5">
          <button className="flex justify-center items-center rounded-full shadow-2xl shadow-black w-[56px] h-[56px]">
            <ArrowLeft size={40} />
          </button>
          <button className="flex justify-center items-center rounded-full shadow-2xl shadow-black w-[56px] h-[56px]">
            <ArrowRight size={40} />
          </button>
        </div>
      </section>
      <section className="flex flex-col justify-between h-[312px] bg-main-500 text-white mx-5 mb-8 p-5 rounded-xl">
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
