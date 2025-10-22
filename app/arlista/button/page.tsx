type buttonProps = {
  szoveg: string;
};

const Button: React.FC<buttonProps> = ({ szoveg }) => {
  return (
    <>
      <div>
        <button
          className="
          bg-[#3b82f6] hover:bg-[#1e74ff] text-white
          font-bold py-2 px-4 rounded-md cursor-pointer
          w-65 mt-3 mb-3
          "
        >
          {szoveg}
        </button>
      </div>
    </>
  );
};

export default Button;
