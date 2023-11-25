import { useState } from "react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({});
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    // e.preventDefault();
    console.log(formData);
    // alert("Thank you");
    setTimeout(() => {
      setSuccess(true);
    }, 1000);
    // setFormData({});
    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      {success && (
        <p className="fixed top-5 ml-2 left-5 text-sm border px-3 py-2 rounded-xl text-white bg-black border-red font-bold">
          Form Submitted
        </p>
      )}
      <form
        method="POST"
        name="contact"
        action="."
        onSubmit={handleSubmit}
        className="my-5"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label htmlFor="name" className="font-bold poppinsfonts ">
            Name
          </label>
          <input
            required
            type="text"
            onChange={handleChange}
            name="name"
            value={formData.name}
            className="w-full bg-transparent appearance-none border-b  rounded py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label htmlFor="email" className="font-bold poppinsfonts">
            Email
          </label>
          <input
            required
            type="email"
            onChange={handleChange}
            name="email"
            value={formData.email}
            className="w-full bg-transparent appearance-none border-b  rounded py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label htmlFor="message" className="font-bold poppinsfonts">
            Message
          </label>
          <input
            required
            type="text"
            onChange={handleChange}
            name="message"
            value={formData.message}
            className="w-full bg-transparent appearance-none border-b  rounded py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="btn-download rounded-xl py-2 font-bold px-5 mt-5 flex items-center justify-center gap-2 text-white"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};
