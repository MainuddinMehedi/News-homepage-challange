const ViteLogoCard = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-sm mx-auto p-8 bg-white rounded-xl shadow-md space-y-2 sm:flex sm:items-center sm:py-4 sm:space-y-0">
        <img
          className="h-24 mx-auto rounded-full ring-4 ring-green-400 sm:mx-0 sm:flex-shrink-0 "
          src="/vite.svg"
          alt="vite logo"
        />
        <div className="text-center space-y-2 sm:text-left pl-3">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">hello</p>
            <p className="text-gray-600 font-medium">Logo of vite</p>
          </div>
          <button className="px-4 py-1 border border-purple-200 rounded-r-full text-sm text-purple-600 font-semibold bg-white">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViteLogoCard;
