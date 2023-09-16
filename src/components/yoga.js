import avatar from '../assets/images/liat.jpg';

const Yoga = () => {
  return (
    <div className="about-container">
      <div className="box">
        <div className="text-box">
          <h2>Yoga</h2>

          <p>
            <strong className="highlight">yoga</strong>.
          </p>
          <br />
        </div>

        <img className="avatar" src={avatar} alt="liat-meadows" />
      </div>
    </div>
  );
};

export default Yoga;
