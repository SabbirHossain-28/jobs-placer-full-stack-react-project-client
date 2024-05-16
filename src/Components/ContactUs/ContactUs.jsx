
const ContactUs = () => {
    return (
        <div className="max-w-7xl mx-auto pb-12">
        {/* <Helmet>
          <title>UrbanEdge | Contact-Us</title>
        </Helmet> */}
        <div className="bg-[#f3f9fc] dark:bg-gray-800  gap-4 p-8 mt-8 rounded-lg">
          <div className="text-center mb-8">
          <h2 className="text-5xl  font-semibold mb-4 font-rancho text-teal-700">
            Contact With Us
          </h2>
          <p className="font-raleway text-gray-500 dark:text-gray-400 text-sm md:text-base lg:text-base">
          Our Contact Us section is your gateway to reaching out to us directly. Whether you have questions, feedback, or inquiries about our services, we are here to assist you. Feel free to fill out the form below with your details and message, and our dedicated team will get back to you as soon as possible. Alternatively, you can find our contact information listed below for direct communication. We value your input and look forward to hearing from you!
          </p>
          </div>
          <div className="">
            <h2 className="text-2xl font-semibold mb-4">Send Message</h2>
            <form className="mb-4">
              <div className="flex flex-col md:flex-row lg:flex-row gap-2 mb-3">
                <div className="md:w-1/2 lg:w-1/2">
                  <label
                    className="block text-gray-500 dark:text-gray-400 text-lg font-medium mb-2"
                    htmlFor="name"
                  >
                    Full Name
                  </label>
                  <input className="w-full p-2 rounded-md" type="text" id="name" placeholder="Your full name"/>
                </div>
                <div className="md:w-1/2 lg:w-1/2">
                  <label
                    className="block text-gray-500 dark:text-gray-400 text-lg font-medium mb-2"
                    htmlFor="email"
                  >
                    Your Email
                  </label>
                  <input className="w-full p-2 rounded-md" type="email" id="email" placeholder="Your email"/>
                </div>
              </div>
              <label
                className="block text-gray-500 dark:text-gray-400 text-lg font-medium mb-2"
                htmlFor="subject"
              >
                Subject
              </label>
              <input className="w-full mb-3 p-2 rounded-md" type="text" id="subject" placeholder="Enter your subject"/>
              <label
                className="block text-gray-500 dark:text-gray-400 text-lg font-medium mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="6"
                className="w-full  rounded-md"
                placeholder="Place your message here....."
              ></textarea>
            </form>
  
            <button
              className="border px-10 py-2 text-lg text-white font-semibold bg-[#50e957]"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Send
            </button>
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <h3 className="font-bold text-lg">Thank you Sir!!!</h3>
                <p className="py-4">Your message is successfully sended</p>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
            <div className="font-inter mt-4">
              <p className="text-[#6c6767] text-lg font-medium mb-2">
                Subscribe Newsletter & Get Company News.
              </p>{" "}
              <span>
                <label className="input input-bordered flex items-center ">
                  <input type="text" className="grow p-4" placeholder="Enter Your Email" />
                  <span className=" bg-[#50e957] badge-info font-inter text-white rounded-lg">Subscribe</span>
                </label>
              </span>
          </div>
        </div>
      </div>
    );
};

export default ContactUs;