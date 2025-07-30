import React from 'react';

const RegisterSection = () => {
  return (
    <section
      className="bg-gradient-to-t from-[#C137A2] to-[#694ED6] py-16 md:py-20 px-4"
      id="register"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Content */}
          <div className="flex flex-col justify-end w-full md:w-5/12 text-white text-center md:text-left pl-16">
            <h2 className="text-3xl md:text-5xl mb-4 font-light">Register Now</h2>
            <p className="text-lg md:text-xl font-bold">
              Join us for an unforgettable experience!
            </p>
          </div>

          {/* Right Form */}
          <div className="w-full md:w-7/12">
            <div className="w-full max-w-[600px] bg-gradient-to-l from-[#444343] to-[#1a1a1a] backdrop-blur-[15px] rounded-[15px] border border-[rgba(7,7,7,0.2)] p-6 md:p-10 text-white shadow-[0_4px_20px_rgba(28,28,28,0.2)]">
              <form id="registration-form" className="space-y-6">
                {[
                  { id: 'first_name', type: 'text', placeholder: 'First Name' },
                  { id: 'last_name', type: 'text', placeholder: 'Last Name' },
                  { id: 'job_title', type: 'text', placeholder: 'Job Title' },
                  { id: 'company', type: 'text', placeholder: 'Company' },
                  { id: 'phone', type: 'tel', placeholder: 'Mobile Number' },
                  { id: 'email', type: 'email', placeholder: 'Email Address' },
                  {
                    id: 'company_website_URL',
                    type: 'url',
                    placeholder: 'Company Website URL',
                  },
                ].map(({ id, type, placeholder }) => (
                  <input
                    key={id}
                    type={type}
                    id={id}
                    name={id}
                    placeholder={placeholder}
                    required
                    className="w-full px-4 py-2 rounded bg-[#ffffff1a] text-white border border-[#ffffff4d] focus:outline-none"
                  />
                ))}

                <div className="flex items-start gap-2 text-sm text-white">
                  <input
                    type="checkbox"
                    id="privacy_policy"
                    name="privacy_policy"
                    required
                    className="mt-[6px]"
                  />
                  <label htmlFor="privacy_policy" className="leading-snug">
                    By filling out the registration form to attend our event, you agree and consent to{' '}
                    <a
                      href="https://cogentsolutions.ae/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#dd05d4]"
                    >
                      Cogent Solutions Privacy Policy
                    </a>.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#dd05d4] hover:bg-pink-600 text-white py-2 rounded mt-2"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
