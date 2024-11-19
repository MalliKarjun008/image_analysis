import Check from "../../assets/icons/check";
import Wrong from "../../assets/icons/wrong";

export default function Uploading({ status, loading }) {
  // Base class for styling
  let baseClass = "rounded-full  text-center p-3";

  // Adjust background based on the status (success or failure)
  if (status) {
    baseClass += " bg-green-500"; // Green for success
  } else {
    baseClass += " bg-red-500 text-white"; // Red for failure
  }

  return (
    <div className="flex items-center justify-between m-3 bg-blue-100 rounded-lg">
      <div className="flex p-2">
        {/* Type section */}
        <div className={baseClass}>Type</div>

        {/* File Name and Progress */}
        <div className="flex flex-col px-3">
          <h1 className="font-semibold">DUMMYIMG.ext</h1>
          <p className="text-sm text-gray-600">12KB/12KB</p>
        </div>
      </div>

      {/* Icon Section (Check or Wrong) */}
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div className="text-lg">
          {status ? (
            <Check color="black" width={40} height={40} />
          ) : (
            <Wrong color="black" width={40} height={40} />
          )}
        </div>
      )}
    </div>
  );
}