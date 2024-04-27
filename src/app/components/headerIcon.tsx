import { MONTHS } from "../data/constants";

const HeaderIcon = () => {
  const date = new Date();
  const month = date.getMonth();
  const day = date.getDate();

  return <div className="rounded-xl bg-slate-50 shadow-xl relative shake-on-hover">
    <div className="rounded-tl-xl rounded-tr-xl bg-red-700 px-10 py-2 relative flex justify-center">
      <span className="text-white uppercase font-semibold text-2xl tracking-widest">
        {MONTHS[month]}
      </span>
    </div>
    <div className="px-10 py-6 relative flex justify-center">
      <span className="text-6xl font-extrabold">
        {day}
      </span>
    </div>
  </div>
}

export default HeaderIcon;
