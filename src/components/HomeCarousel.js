import Hero from '../components/Hero';
import hero1 from '../img/hero/1.png';

const HomeCarousel = () => {
  return (
        <Hero
          title='VOCÊ MERECE O QUE HÁ DE MELHOR'
          text='FRETE GRÁTIS PARA TODO O BRASIL!'
          heroCss={{
            backgroundImage: `url(${hero1})`,
            backgroundPositionX: 'center',
            backgroundPositionY: 'center',
            color: '#fff',
          }}
          bgCss={{
            background:
              'linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1))',
          }}
        />
  );
};

export default HomeCarousel;
