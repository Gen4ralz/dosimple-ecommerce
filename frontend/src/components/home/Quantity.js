import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';

const Quantity = ({ quantity, inc, dec }) => {
  return (
    <div className="flex last:border-r last:rounded-tr-lg last:rounded-br-lg first:rounded-tl-lg first:rounded-bl-lg overflow-hidden">
      <span
        className="flex border p-4 border-r-0 cursor-pointer hover:bg-indigo-500 hover:text-white transition-all"
        onClick={dec}
      >
        <MinusIcon className="w-5 h-5" />
      </span>
      <span className="flex-1 border flex items-center justify-center font-medium border-r-0">
        {quantity}
      </span>
      <span
        className="flex border p-4 border-r-0 cursor-pointer hover:bg-indigo-500 hover:text-white transition-all"
        onClick={inc}
      >
        <PlusIcon className="w-5 h-5" />
      </span>
    </div>
  );
};

export default Quantity;
