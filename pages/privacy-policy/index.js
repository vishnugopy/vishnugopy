import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
      </Head>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Privacy Policy - One up two down - 26 juin 2025
          </h1>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            This app does not collect, store, or share any personal information.
            It does not use cookies, analytics, or third-party tracking. We do
            not collect any location data, contact details, or other sensitive
            information. If you have any questions, contact us at{" "}
            <a
              href="mailto:vishnugoby0010@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              vishnugoby0010@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
