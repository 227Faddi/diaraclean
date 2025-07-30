import { DATA } from "@/data";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

const CTA = () => {
  return (
    <section id="cta" className="py-20 md:py-32 px-4 sm:px-6">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-3xl p-4 sm:p-8 md:p-12 shadow-2xl max-w-5xl mx-auto">
          <div className="mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Un Ambiente Pulito, Senza Stress
            </h2>
            <p className="text-base sm:text-lg max-w-2xl mx-auto mb-10">
              Contattaci per un preventivo gratuito e senza impegno. Il nostro
              team è pronto ad ascoltare le tue esigenze e a proporti la
              soluzione migliore.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10 text-gray-800">
              <Link
                href={DATA.phoneHref}
                className="flex items-center justify-center gap-2 text-base sm:text-lg font-semibold hover:underline"
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>{DATA.phone}</span>
              </Link>
              <Link
                href={DATA.emailHref}
                className="flex items-center justify-center gap-2 text-base sm:text-lg font-semibold hover:underline"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>{DATA.email}</span>
              </Link>
            </div>
            <Link
              href={DATA.whatsApp}
              className="btn bg-gray-800 hover:bg-gray-950 rounded-full px-4 sm:px-8 sm:py-4 text-sm sm:text-base md:text-lg text-white"
            >
              Richiedi un preventivo gratuito
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
