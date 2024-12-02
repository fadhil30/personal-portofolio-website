import iconPhone from "../assets/icon-phone.svg";
import iconMail from "../assets/icon-mail.svg";
import gitHubLogo from "../assets/github-logo.svg";
import linkedInLogo from "../assets/linkedin-logo.svg";
import twitterLogo from "../assets/twitter-logo.svg";

export default function ContactMe() {
  return (
    <section id="contact" className="m-0">
      <div className="max-w-full mx-auto flex flex-col items-center py-24 px-6 sm:px-12 md:px-24">
        <h2 className="bg-gray-200 rounded-xl p-1 w-28 text-center text-sm font-medium text-gray-600">
          Get In Touch
        </h2>
        <p className="text-base font-normal text-gray-600 mt-4 text-center max-w-3xl">
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>
        <div className="flex flex-col gap-5 items-center mt-12 w-full max-w-3xl mx-auto">
          <div className="flex flex-row gap-5 justify-center items-center w-full">
            <img className="w-10" src={iconMail} alt="Icon Mail" />
            <p className="font-semibold text-2xl text-gray-900">
              fgeminni0@gmail.com
            </p>
          </div>
          <div className="flex flex-row gap-5 justify-center items-center w-full mt-6 sm:mt-0">
            <img className="w-10" src={iconPhone} alt="Icon Phone" />
            <p className="font-semibold text-2xl text-gray-900">
              +62 82299227661
            </p>
          </div>
        </div>
        <p className="text-base font-normal text-gray-600 mt-12 text-center">
          You may also find me on these platforms!
        </p>
        <div className="flex justify-center gap-5 mt-6">
          <img className="w-6 h-6" src={gitHubLogo} alt="GitHub Logo" />
          <img className="w-6 h-6" src={linkedInLogo} alt="LinkedIn Logo" />
          <img className="w-6 h-6" src={twitterLogo} alt="X Logo" />
        </div>
      </div>
    </section>
  );
}
