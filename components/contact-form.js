// components/ContactForm.js
import { useForm } from 'react-hook-form';

// ...

const ContactForm = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Handle successful submission (e.g., show a success message)
        console.log('Form submitted successfully', data);
      } else {
        // Handle error
        console.error('Error submitting form');
      }
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-lg p-6">
      <div className="flex flex-col bg-yellow-200">
        <div className="flex flex-row mb-6">
          <label className="m-2 flex-col justify-center w-1/2">
            <p>Name:</p>
            <input
              type="text"
              name="name"
              className="rounded-lg"
              {...register('name')}
            />
          </label>

          <label className="m-2 flex-col justify-center w-1/2">
            <p>Email:</p>
            <input
              type="email"
              name="email"
              className="rounded-lg"
              {...register('email')}
            />
          </label>
        </div>

        <label className=" flex flex-col justify-center w-full h-full">
          <p>Message:</p>
          <textarea
            name="message"
            className="w-full h-36 rounded-lg"
            {...register('message')}
          />
        </label>

        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;
