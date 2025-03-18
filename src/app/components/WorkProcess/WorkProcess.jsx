const WorkProcess = ({ className, num, content }) => {
  return (
    <div
      className={`${className} w-[180px] h-[180px] rounded-full bg-gradient-to-b from-orange-500 to-blue-900 text-white text-start font-bold p-8 shadow-lg`}
    >
      <p className="text-3xl">{num}.</p>
      <p className="text-lg">{content}</p>
    </div>
  );
};

export default WorkProcess;
