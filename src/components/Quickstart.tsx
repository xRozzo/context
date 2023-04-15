export default function Quickstart() {
  return (
    <div
      id="get-started"
      className="px-10 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="flex flex-col bg-white border rounded shadow-sm md:justify-center lg:flex-row">
        <div className="flex flex-col justify-between p-5 border-b sm:p-10 lg:border-b-0 lg:border-r lg:w-1/2">
          <div>
            <p className="mb-2 text-xs font-semibold tracking-wide uppercase">
              For users
            </p>
            <h5 className="max-w-md mb-6 text-3xl font-extrabold leading-none sm:text-4xl">
              Check certificates
            </h5>
            <p className="mb-6 text-base text-gray-700 md:text-lg sm:mb-8">
              Verify the authenticity of credentials by checking a user&#39;s
              certificates.
            </p>
          </div>
          <div className="flex items-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Get started
            </button>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between p-5 sm:p-10 lg:w-1/2">
          <div>
            <p className="mb-2 text-xs font-semibold tracking-wide uppercase">
              For institutions
            </p>
            <h5 className="max-w-md mb-6 text-3xl font-extrabold leading-none sm:text-4xl">
              Issue certificates
            </h5>
            <p className="mb-6 text-base text-gray-700 md:text-lg sm:mb-8">
              Easily create and securely store multiple credentials for a specified
              user.
            </p>
          </div>
          <div className="flex items-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Get started
            </button>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
