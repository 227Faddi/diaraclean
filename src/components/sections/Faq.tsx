const faqs = [
  {
    question: "Quali zone coprite?",
    answer:
      "Operiamo principalmente a Olbia e nelle zone limitrofe. Contattaci per verificare la disponibilità nella tua area specifica.",
  },
  {
    question: "Devo fornire io i prodotti e le attrezzature?",
    answer:
      "No, il nostro team arriverà con tutto il necessario: prodotti professionali, ecologici e attrezzature all'avanguardia per garantire il miglior risultato.",
  },
  {
    question: "È possibile richiedere un servizio di pulizia ricorrente?",
    answer:
      "Assolutamente! Offriamo piani di pulizia settimanali, bisettimanali o mensili. Contattaci per creare un piano personalizzato in base alle tue esigenze.",
  },
  {
    question: "Qual è la durata di un intervento di pulizia?",
    answer:
      "La durata dipende dalle dimensioni dell'immobile e dal tipo di servizio richiesto. Ti forniremo una stima precisa al momento del preventivo.",
  },
  {
    question: "Come posso pagare?",
    answer:
      "Accettiamo pagamenti tramite bonifico bancario, carta di credito o contanti. Il pagamento viene solitamente effettuato al termine del servizio.",
  },
];

const Faq = () => {
  return (
    <section id="faq" className="py-32 px-2 sm:px-6">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-base-content mb-4">
            Domande Frequenti
          </h2>
          <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
            Hai ancora dubbi? Qui trovi le risposte alle domande più comuni. Se
            non trovi quello che cerchi, non esitare a contattarci.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="collapse collapse-arrow border-b border-gray-200 py-1 rounded-none"
            >
              <input
                type="radio"
                name="my-accordion-2"
                defaultChecked={index === 0}
              />
              <div className="collapse-title text-lg font-semibold text-base-content">
                {faq.question}
              </div>
              <div className="collapse-content">
                <p className="text-base-content/80">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
