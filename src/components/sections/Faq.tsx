const Faq = () => {
  return (
    <section id="faq" className="py-32 px-4 lg:px-6">
      <h2 className="text-5xl text-center mb-24">FAQ</h2>
      <div className="bg-primary text-primary-content rounded-xl p-4 lg:p-6 lg:text-xl">
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold lg:text-2xl">
            Posso prenotare online?
          </div>
          <div className="collapse-content text-sm lg:text-lg">
            Sì, puoi usare il nostro modulo di contatto oppure scriverci su
            WhatsApp.
          </div>
        </div>
        <div className="divider mx-0 divider-secondary"></div>
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold lg:text-2xl">
            Portate voi i prodotti per la pulizia?
          </div>
          <div className="collapse-content text-sm lg:text-lg">
            Certo! Usiamo prodotti professionali ed ecologici.
          </div>
        </div>
        <div className="divider mx-0 divider-secondary"></div>
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold lg:text-2xl">
            Fate pulizie nei weekend o festivi?
          </div>
          <div className="collapse-content text-sm lg:text-lg">
            Sì, su richiesta, con un piccolo supplemento.
          </div>
        </div>
        <div className="divider mx-0 divider-secondary"></div>
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold lg:text-2xl">
            Offrite abbonamenti o sconti periodici?
          </div>
          <div className="collapse-content text-sm lg:text-lg">
            Sì, contattaci per soluzioni personalizzate.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
