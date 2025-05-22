
import { useEffect } from "react";

const TypeformEmbed = () => {
  useEffect(() => {
    // Create script element for Typeform
    const script = document.createElement("script");
    script.src = "https://embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up function to remove the script when component unmounts
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="typeform-section" className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Get Started with Scalysis</h2>
          <div className="bg-white rounded-2xl shadow-medium p-4 overflow-hidden">
            <div data-tf-live="01JVWDWG3HHEAD58J2SYJYFMAG" className="w-full aspect-video"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypeformEmbed;
