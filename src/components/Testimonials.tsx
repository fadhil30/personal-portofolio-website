import client1 from "../assets/client-1.jpg";
import client2 from "../assets/client-2.jpg";
import client3 from "../assets/client-3.jpg";

export default function Testimonials() {
  const testimonials = [
    {
      clientPhoto: client1,
      feedback: `“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Fadhil and will rehire in the future for Frontend development.”`,
      clientName: "Vincent Revel",
      clientJob: "Founder - xyz.com",
    },
    {
      clientPhoto: client2,
      feedback: `“Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.”`,
      clientName: "Shakila Michelle",
      clientJob: "Founder - abc.com",
    },
    {
      clientPhoto: client3,
      feedback: `“Fadhil was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.”`,
      clientName: "Dominic Toretto",
      clientJob: "Freelancer",
    },
  ];

  return (
    <section id="testimonials" className="bg-gray-50 py-24">
      <div className="mx-auto flex flex-col items-center">
        <h2 className="bg-gray-200 rounded-xl p-1 w-28 text-center text-sm font-medium text-gray-600">
          Testimonials
        </h2>
        <p className="text-base font-normal text-gray-600 mt-4 text-center">
          Nice things people have said about me:
        </p>
        <div className="flex flex-wrap justify-center gap-12 mt-12">
          {testimonials.map((testimonial, index) => (
            <div
              className="max-w-xs w-full mx-auto rounded-xl bg-gray-100 flex flex-col px-14 pt-12 pb-20 items-center"
              key={index}
            >
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={testimonial.clientPhoto}
                  alt="Client Photo"
                />
              </div>
              <p className="mt-6 text-base text-gray-600 text-center">
                {testimonial.feedback}
              </p>
              <div className="flex flex-col items-center">
                <p className="mt-6 text-xl font-semibold text-gray-900">
                  {testimonial.clientName}
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  {testimonial.clientJob}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
