const ClientsFeedBack = () => {
  return (
    <div className="pb-12">
      <section className="bg-slate-300 dark:bg-gray-800 p-12">
        <div className="max-w-7xl mx-auto px-6 py-10 shadow-xl ">
          <h1 className="text-5xl font-lora font-semibold text-center text-teal-700 capitalize lg:text-3xl dark:text-white">
            What our <span className="text-[#4be053]">clients</span> say
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
          Hear from some of our satisfied clients about their experiences
            working with us.
          </p>

          <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
            <div className="p-8 border rounded-lg dark:border-gray-700">
              <p className="leading-loose text-gray-500 dark:text-gray-400">
              Working with Jobs Placer was an amazing experience. They
                helped us find the perfect candidates for our team, saving us
                time and effort. Highly recommended!
              </p>

              <div className="flex items-center mt-8 -mx-2">
                

                <div className="mx-2">
                  <h1 className="font-semibold text-gray-800 dark:text-white">
                    Shohanur Rahman
                  </h1>
                  <span className="text-sm text-gray-500">
                    CTO, RiseUp Consultency
                  </span>
                </div>
              </div>
            </div>

            <div className="p-8 border rounded-lg dark:border-gray-700">
              <p className="leading-loose text-gray-500 dark:text-gray-400">
                “XFactor Solution has been working with Jobs Placer for years,
                and they never disappoint. Their dedication to finding the
                right talent for our organization is unmatched.”.
              </p>

              <div className="flex items-center mt-8 -mx-2">
                

                <div className="mx-2">
                  <h1 className="font-semibold text-gray-800 dark:text-white">
                    Foyzul Karim
                  </h1>
                  <span className="text-sm text-gray-500">
                    CEO, XFactor Solution
                  </span>
                </div>
              </div>
            </div>

            <div className="p-8 border rounded-lg dark:border-gray-700">
              <p className="leading-loose text-gray-500 dark:text-gray-400">
                “We are very satisfied with the services provided by Jobs
                Placer. They helped us build a talented and diverse team that
                is driving our business forward.”.
              </p>

              <div className="flex items-center mt-8 -mx-2">
                
                <div className="mx-2">
                  <h1 className="font-semibold text-gray-800 dark:text-white">
                    Shakil Ahmed{" "}
                  </h1>
                  <span className="text-sm text-gray-500">
                    Marketing Manager at SearchTech IT.BD
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default ClientsFeedBack;
