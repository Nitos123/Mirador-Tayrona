import React from "react";
import CardServices from "./CardServices";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

const CardServicesContainer = (props) => {
  const images = [
    {
      image: image1,
      description:
        "En nuestro hotel, nos enorgullecemos de ofrecer un servicio de habitaciones excepcional para nuestros huéspedes. Nuestro servicio de habitaciones está disponible las 24 horas del día, para que puedas disfrutar de comidas y bebidas en la privacidad de tu habitación en cualquier momento que desees. Ofrecemos un menú completo que incluye opciones de comida local y platos internacionales, y nuestro personal está siempre dispuesto a ayudarte a elegir la opción perfecta para satisfacer tus antojos. Además, nuestro servicio de habitaciones se realiza con rapidez y eficiencia, para que puedas disfrutar de tu comida caliente y recién preparada en la comodidad de tu habitación. ¡Relájate y disfruta de una experiencia culinaria sin esfuerzo en nuestro hotel en el Parque Tayrona!",
    },
    {
      image: image2,
      description:
        "En nuestro hotel, ofrecemos un servicio de transporte exclusivo para nuestros clientes, diseñado para hacer que tu experiencia de viaje sea lo más cómoda y sin problemas posible. Nuestro servicio de transporte incluye traslados desde y hacia el aeropuerto, así como también viajes a lugares turísticos cercanos como el Parque Tayrona. Nuestros conductores son profesionales y conocedores de la zona, lo que garantiza una experiencia de viaje segura y agradable. Además, nuestro servicio de transporte se realiza en vehículos modernos y cómodos que se adaptan a tus necesidades, ya sea que viajes solo o en grupo. ¡No te preocupes por el transporte durante tus vacaciones, deja que nosotros nos encarguemos de ello y disfruta de tu estancia en el Parque Tayrona!",
    },
    {
      image: image3,
      description:
        "Disfruta de una experiencia gastronómica única en nuestro restaurante en el Parque Tayrona. Ofrecemos una amplia variedad de platos que fusionan sabores locales con técnicas culinarias innovadoras. Desde pescado fresco del Caribe hasta exquisitos platos vegetarianos, nuestro menú es perfecto para satisfacer todos los paladares. Todos nuestros platos son preparados con ingredientes frescos y de alta calidad, y nuestro personal atento y profesional se asegurará de que tu experiencia culinaria sea inolvidable. Ya sea que busques una cena romántica para dos o una cena en grupo con amigos, nuestro restaurante es el lugar perfecto para disfrutar de una comida deliciosa en el Parque Tayrona.",
    },
    {
      image: image4,
      description:
        "El bar del hostal es el lugar perfecto para relajarse después de un día lleno de aventuras en el Parque Tayrona. Ofrecemos una variedad de bebidas, desde cervezas frías hasta cócteles tropicales hechos con frutas frescas de la región. También puedes disfrutar de una selección de bocadillos y platos ligeros para satisfacer tus antojos. Nuestro ambiente relajado y acogedor es ideal para socializar con otros viajeros y compartir historias de tus aventuras. ¡Ven y disfruta de una experiencia única en el corazón del Parque Tayrona!",
    },
  ];

  return (
    <div>
      <h1>Take a Look At Our Services</h1>
      <p>
        We provide a wide range of services to make your stay as comfortable and
        enjoyable as possible. From room service to a 24-hour front desk, we
        have everything you need to make your visit unforgettable. Book now and
        experience the best that we have to offer.
      </p>
      <Swiper spaceBetween={0} slidesPerView={1}>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <CardServices
              backgroundImage={image.image}
              description={image.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardServicesContainer;
