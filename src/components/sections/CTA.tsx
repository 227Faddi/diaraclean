import { Mail, Phone } from "lucide-react";
import Link from "next/link";

const CTA = () => {
  return (
    <section id="cta" className="py-32 px-4 lg:px-6">
      <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-3xl p-12">
        <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Pronto a Vivere in un Ambiente più Pulito?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Non aspettare oltre. Contattaci oggi stesso per un preventivo
            gratuito e senza impegno. Il nostro team è pronto ad ascoltare le
            tue esigenze e a proporti la soluzione migliore.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <Link
              href="tel:+391234567890"
              className="flex items-center justify-center gap-2 text-lg font-semibold hover:underline"
            >
              <Phone className="w-6 h-6" />
              <span>+39 123 456 7890</span>
            </Link>
            <Link
              href="mailto:info@diaraclean.com"
              className="flex items-center justify-center gap-2 text-lg font-semibold hover:underline"
            >
              <Mail className="w-6 h-6" />
              <span>info@diaraclean.com</span>
            </Link>
          </div>
          <Link
            href="#"
            className="btn bg-gray-800 hover:bg-gray-950 rounded-full px-8 py-6 lg:text-lg text-white"
          >
            Richiedi un preventivo gratuito
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
