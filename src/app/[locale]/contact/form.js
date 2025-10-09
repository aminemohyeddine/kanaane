'use client';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useTranslations } from 'next-intl';
import { franc } from 'franc';
import iso6393to1 from 'iso-639-3-to-1';

const ContactUsForm = () => {
  const t = useTranslations('contactusForm');

  const [formData, setFormData] = useState({
    email: '',
    message: '',
    name: '',
    number: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);

    try {
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

      const iso3 = franc(formData.message);
      const langCode = iso6393to1(iso3);

      const res = await fetch(
        `https://clients5.google.com/translate_a/t?client=dict-chrome-ex&sl=${langCode}&tl=ar&q=${formData.message}`,
      );
      const data = await res.json();

      await emailjs.send(
        serviceID,
        templateID,
        {
          to_email: 'kanaaneauto@gmail.com',
          from_email: formData.email,
          email: 'kanaaneauto@gmail.com',
          messageArabic: data[0],
          originalMessage: formData.message,
          number: formData.number,
          name: formData.name,
        },
        userID,
      );

      setSubmitStatus('success');
      setFormData({ email: '', message: '', name: '', number: '' });
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-green-50 to-cyan-50 dark:bg-[#111827] dark:bg-gradient-to-br dark:from-[#111827] dark:via-[#111827] dark:to-[#111827]">
      <div className="py-12 px-4 mx-auto max-w-screen-lg">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-green-500 py-6">
            <div className="max-w-screen-md mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
                {t('title')}
              </h2>
              <p className="mt-3 text-center text-blue-100 max-w-2xl mx-auto">
                {t('subtitle')}
              </p>
            </div>
          </div>

          <div className="py-8 lg:py-12 px-4 mx-auto max-w-screen-md">
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 text-green-800 rounded-lg border border-green-200">
                {t('statusSuccess')}
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 text-red-800 rounded-lg border border-red-200">
                {t('statusError')}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t('labelName')}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder={t('placeholderName')}
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t('labelEmail')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder={t('placeholderEmail')}
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t('labelNumber')}
                </label>
                <input
                  type="text"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder={t('placeholderNumber')}
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">
                  {t('labelMessage')}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  minLength={10}
                  className="block p-3 min-h-40 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder={t('placeholderMessage')}
                ></textarea>
              </div>

              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`py-3 px-8 text-sm font-medium text-center text-white rounded-lg bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg transition-all duration-300 ${
                    isLoading ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      {t('sending')}
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {t('submitButton')}
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsForm;
