import Image from 'next/image';

const Hero = () => {
  return (
    <section>
      <div
        style={{
          borderRadius: '50% !important',
          width: '85%',
          marginBottom: '1rem',
          marginTop: '1rem',
        }}
      >
        <Image
          src="/images/profile.png"
          alt="image"
          width={300}
          height={300}
          layout="responsive"
          style={{ borderRadius: '100% !important' }}
        />
      </div>
      <h1>{"Hi, I'm Ismail"}</h1>
      <p>I blog about web development</p>
    </section>
  );
};

export default Hero;
