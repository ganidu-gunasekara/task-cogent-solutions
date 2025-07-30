'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const RegisterSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.05 });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  const validate = (data: Record<string, any>) => {
    const newErrors: Record<string, string> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9+\-\s()]{7,20}$/;
    const urlRegex = /^(https?:\/\/)?([\w.-]+)+\.[a-z]{2,}(\S*)?$/i;

    if (!data.first_name) newErrors.first_name = 'First name is required';
    if (!data.last_name) newErrors.last_name = 'Last name is required';
    if (!data.job_title) newErrors.job_title = 'Job title is required';
    if (!data.company) newErrors.company = 'Company is required';
    if (!data.phone || !phoneRegex.test(data.phone))
      newErrors.phone = 'Valid phone number is required';
    if (!data.email || !emailRegex.test(data.email))
      newErrors.email = 'Valid email address is required';
    if (
      !data.company_website_url ||
      !urlRegex.test(data.company_website_url)
    )
      newErrors.company_website_url = 'Valid URL is required';

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const data = {
      first_name: formData.get('first_name'),
      last_name: formData.get('last_name'),
      job_title: formData.get('job_title'),
      company: formData.get('company'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      company_website_url: formData.get('company_website_url'),
    };

    const validationErrors = validate(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatusMessage(null);
      return;
    }

    setErrors({});

    const res = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      setStatusMessage({
        type: 'success',
        text: 'Registered successfully!',
      });
      form.reset();
    } else {
      setStatusMessage({
        type: 'error',
        text: 'Something went wrong. Please try again.',
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-t from-[#C137A2] to-[#694ED6] py-16 md:py-20 px-4"
      id="register"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.div
            className="flex flex-col justify-end w-full md:w-5/12 text-white text-center md:text-left md:pl-16"
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          >
            <h2 className="text-3xl md:text-5xl mb-4 font-light">
              Register Now
            </h2>
            <p className="text-lg md:text-xl font-bold">
              Join us for an unforgettable experience!
            </p>
          </motion.div>

          <motion.div
            className="w-full md:w-7/12 flex items-center justify-center"
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          >
            <div className="w-full max-w-[600px] bg-gradient-to-l from-[#444343] to-[#1a1a1a] backdrop-blur-[15px] rounded-[15px] border border-[rgba(7,7,7,0.2)] p-6 md:p-10 text-white shadow-[0_4px_20px_rgba(28,28,28,0.2)]">
              <form
                id="registration-form"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {[
                  { id: 'first_name', type: 'text', placeholder: 'First Name' },
                  { id: 'last_name', type: 'text', placeholder: 'Last Name' },
                  { id: 'job_title', type: 'text', placeholder: 'Job Title' },
                  { id: 'company', type: 'text', placeholder: 'Company' },
                  { id: 'phone', type: 'tel', placeholder: 'Mobile Number' },
                  { id: 'email', type: 'email', placeholder: 'Email Address' },
                  {
                    id: 'company_website_url',
                    type: 'url',
                    placeholder: 'Company Website URL',
                  },
                ].map(({ id, type, placeholder }, i) => (
                  <div key={id} className="relative">
                    <motion.input
                      type={type}
                      id={id}
                      name={id}
                      placeholder={placeholder}
                      className={`w-full px-4 py-2 rounded bg-[#ffffff1a] text-white border ${errors[id] ? 'border-red-500' : 'border-[#ffffff4d]'
                        } focus:outline-none`}
                      initial={{ y: 30, opacity: 0 }}
                      animate={isInView ? { y: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                    />
                    {errors[id] && (
                      <p className="text-red-400 text-sm mt-1">{errors[id]}</p>
                    )}
                  </div>
                ))}

                <motion.div
                  className="flex items-start gap-2 text-sm text-white"
                  initial={{ y: 30, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.3 }}
                >
                  <input
                    type="checkbox"
                    id="privacy_policy"
                    name="privacy_policy"
                    required
                    className="mt-[6px]"
                  />
                  <label htmlFor="privacy_policy" className="leading-snug">
                    By filling out the registration form to attend our event,
                    you agree and consent to{' '}
                    <a
                      href="https://cogentsolutions.ae/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#dd05d4]"
                    >
                      Cogent Solutions Privacy Policy
                    </a>
                    .
                  </label>
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full bg-[#dd05d4] hover:bg-pink-600 text-white py-2 rounded mt-2"
                  initial={{ y: 30, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.5 }}
                >
                  Register
                </motion.button>

                {statusMessage && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`mt-4 text-sm px-4 py-2 rounded ${statusMessage.type === 'success'
                        ? 'bg-green-600 text-white'
                        : 'bg-red-600 text-white'
                      }`}
                  >
                    {statusMessage.text}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
