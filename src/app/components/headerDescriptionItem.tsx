/**
 * Returns the header description item.
 */
const HeaderDescriptionItem = ({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) => (
  <div className="flex-1">
    <h3 className="color-slate-950 text-xl font-bold">
      <span className="mr-2 text-pink-600">{index}.</span>
      {title}
    </h3>
    <p className="color-slate-950">{description}</p>
  </div>
);

export default HeaderDescriptionItem;
