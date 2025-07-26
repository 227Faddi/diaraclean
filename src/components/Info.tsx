const Info = () => {
  return (
    <section id="info" className="py-32">
      <h2 className="text-5xl text-center mb-24">Info</h2>
      <div>
        <div className="card bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <button className="btn">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
