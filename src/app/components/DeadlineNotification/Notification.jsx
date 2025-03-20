import { HiOutlineBellAlert } from "react-icons/hi2";

const Notification = () => {
  return (
    <div className="max-w-md mx-auto bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg shadow-lg flex items-start relative">
      {/* Notification Icon */}
      <HiOutlineBellAlert className="text-red-600 text-3xl mr-3" />

      {/* Notification Content */}
      <div>
        <h4 className="font-bold text-lg">Deadline Missed!</h4>
        <p className="text-sm mt-1">
          Unfortunately, I couldn&apos;t develop this page due to the deadline
          being over. Please review the timeline and let me know how to proceed.
        </p>
      </div>
    </div>
  );
};

export default Notification;
