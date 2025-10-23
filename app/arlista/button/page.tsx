"use client";

type buttonProps = {
  szoveg: string;
  szin: string;
  hoverszin: string;
};

const Button: React.FC<buttonProps> = ({ szoveg, szin, hoverszin }) => {
  return (
    <>
      <div>
        <button
          className="text-white font-bold py-2 px-4 rounded-md cursor-pointer w-65 mt-3 mb-3"
          style={{ backgroundColor: szin }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = hoverszin)
          }
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = szin)}
        >
          {szoveg}
        </button>
      </div>
    </>
  );
};

export default Button;
