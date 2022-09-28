const SizesList = ({ list, removeSize }) => {
  return (
    <div>
      {list.length > 0 && <h1 className="right-heading">Sizes List</h1>}
      {list.length > 0 && (
        <div className="flex flex-wrap mt-3 -mx-2">
          {list.map((size) => (
            <div
              key={size.name}
              className="size"
              onClick={() => removeSize(size.name)}
            >
              {size.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SizesList;
