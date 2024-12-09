import Image from 'next/image';

const SignIn: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4 sm:px-6 lg:px-8">
      {/* Sign-In Card */}
      <div className="w-full max-w-sm bg-white p-8 border shadow-md rounded-md">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image src="/vector.png" alt="Nike Logo" width={120} height={40} className="object-contain" />
        </div>

        {/* Main Heading */}
        <h1 className="text-center text-black text-lg font-Helvetica mb-4 weight-700 font-bold">
          YOUR ACCOUNT
        </h1>
        <h2 className="text-center text-black text-lg font-Helvetica mb-6 weight-700 font-bold">
          FOR EVERYTHING NIKE
        </h2>

        {/* Email and Password Fields */}
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
          />
        </div>

        {/* Keep me signed in */}
        <div className="flex items-center justify-between mt-2">
          <label className="flex items-center space-x-2 cursor-pointer text-sm text-gray-600">
            <input type="checkbox" className="form-checkbox" />
            <span>Keep me signed in</span>
          </label>
          <a href="#" className="text-sm text-gray-300 hover:text-green-400">
            Forgotten your password?
          </a>
        </div>

        {/* Bottom Section with Buttons */}
        <div className="mt-6">
          <button
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
          >
            SIGN IN
          </button>
        </div>

        <div className="mt-4 text-center text-sm text-gray-400">
          Not a Member?{' '}
          <a href="#" className="text-black hover:underline underline">
            Join Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
