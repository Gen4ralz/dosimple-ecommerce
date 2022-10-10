import Animate from './Animate';

const Text = ({ mt }) => {
  return (
    <div
      className="w-full h-4 rounded bg-indigo-50 overflow-hidden relative"
      style={{ marginTop: mt }}
    >
      <Animate />
    </div>
  );
};

export default Text;
