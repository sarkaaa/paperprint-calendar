import { MONTHS } from "../data/constants";

const HeaderIcon = () => {
  const date = new Date();
  const month = date.getMonth();
  const day = date.getDate();

  return <div className="shake-on-hover relative rounded-xl bg-slate-50 shadow-xl">
    <div className="relative flex justify-center rounded-t-xl bg-red-700 px-10 py-2">
      <span className="text-2xl font-semibold uppercase tracking-widest text-white">
        {MONTHS[month]}
      </span>
    </div>
    <div className="relative flex justify-center px-10 py-6">
      <span className="text-6xl font-extrabold">
        {day}
      </span>
    </div>
  </div>
}

export default HeaderIcon;
