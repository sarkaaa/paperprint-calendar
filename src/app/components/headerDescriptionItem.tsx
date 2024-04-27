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
    <h3 className="text-xl font-bold">
      <span className="text-pink-600 mr-2">{index}.</span>
      {title}
    </h3>
    <p>{description}</p>
  </div>
);

export default HeaderDescriptionItem;
