const Colors = ({ colors, remove }) => {
  return (
    <div>
      {colors.length > 0 && (
        <h1 className="text-gray-400 text-medium">Colors List</h1>
      )}
      {colors.length > 0 && (
        <div className="flex flex-wrap">
          {colors.map((color) => (
            <div className="py-4 ml-0 pr-4" key={color.id}>
              <div
                className="w-[30px] h-[30px] rounded-full cursor-pointer"
                style={{ background: color.color }}
                onClick={() => remove(color)}
              ></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Colors;
