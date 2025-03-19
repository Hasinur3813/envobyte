const WorkProcess = ({ className, num, content }) => {
  return (
    <div
      className={`${className} w-24 h-24 sm:w-36 sm:h-36 md:w-[180px] md:h-[180px] rounded-full bg-gradient-to-b from-orange-500 to-blue-900 text-white flex justify-center items-center md:text-start font-bold md:p-8 shadow-lg`}
    >
      <div>
        <p className="text-xs md:text-3xl">{num}.</p>
        <p className="text-xs md:text-lg">{content}</p>
      </div>
    </div>
  );
};

export default WorkProcess;
