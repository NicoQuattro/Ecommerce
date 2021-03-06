const data = [
    {
        "id":1,
        "titulo": "Heladera Sigma 2F1600B 329lt",
        "imagen": "https://images.fravega.com/f500/5b8090fccc2c1ec52b9da44d795043eb.jpg",
        "descripcion": "La heladera Sigma 2F1600B está diseñada para tener una experiencia confortable y útil. En su interior, cuenta con estantes regulables con borde antiderrame; cajón para frutas y verduras y crisper especial para fiambres y quesos. Además, viene con balcones para botellas en la contrapuerta. Por otro lado, el freezer está dividido en dos compartimientos.",
        "categoria": "electrodomesticos",
        "precio": "55000",
        "stock": "9"
    },
    {
        "id":2,
        "titulo": "Ventilador de pie Liliana VPRN20",
        "imagen": "https://images.fravega.com/f500/d1f4639d15cd5ba31bcbadc395b9c70d.jpg",
        "descripcion": "El ventilador de pie Liliana VPRN20 viene con parrilla metálica y 3 aspas plásticas de color negro. Su cabezal inclinable de 20 pulgadas (45 cm.) de diámetro cuenta con Sistema Orbital, que direcciona la brisa en forma horizontal y vertical.",
        "categoria": "electrodomesticos",
        "precio": "9900",
        "stock": "5"
    },
    {
        "id":3,
        "titulo": "Microondas BGH",
        "imagen": "https://images.fravega.com/f500/c1d5bc03a450197b9c616f7390dc9089.jpg",
        "descripcion": "El microondas posee un panel de control mecánico donde se encuentran las funciones.",
        "categoria": "electrodomesticos",
        "precio": "18500",
        "stock": "6"
    },

    {
        "id":4,
        "titulo": "Aire Acondicionado Split Inverter 3300 W Sanyo",
        "imagen": "https://images.fravega.com/f500/fc488ece1ed743e1b5e42c4e73db724b.jpg",
        "descripcion": "Los splits Carrier Xpower Inverter controlan electrónicamente la operación del compresor, logrando un rango de operación superior al de los equipos convencionales.",
        "categoria": "electrodomesticos",
        "precio": "59000",
        "stock": "16"
    },
    {
        "id":5,
        "titulo": "Lavarropas Carga Frontal Samsung 6.5 Kg 1000 RPM",
        "imagen": "https://images.fravega.com/f500/e85c908dd8f880e0960e369ee2debba6.jpg",
        "descripcion": "El lavarropas Samsung WW65M0NHWUA es de carga frontal que combina diseño y tecnología brindando una gran experiencia de uso. Gracias a su tambor con forma de diamante, la ropa no se estropea. Los orificios de desagüe son hasta un 43 por ciento más pequeños que en otras máquinas, lo que previene cualquier tipo de daño en los tejidos.",
        "categoria": "electrodomesticos",
        "precio": "69999",
        "stock": "12"
    },
    {
        "id":6,
        "titulo": "Sony PlayStation 5",
        "imagen": "https://images.fravega.com/f500/e24171063a6f9d21eb89c7d9eae6bc5a.jpg",
        "descripcion": "Potencia, capacidad y diseño son algunos de los conceptos que trae la Sony PlayStation 5. Con ella, vas a poder jugar toda una nueva generación de juegos más dinámicos y exigentes.",
        "categoria": "tecnologia",
        "precio": "159000",
        "stock": "6"
    },
    {
        "id":7,
        "titulo": "Notebook Lenovo 15,6",
        "imagen": "https://images.fravega.com/f500/efeccd1b7de9b725b5c18e147a6bc877.jpg",
        "descripcion": "La notebook de Lenovo cuenta con un diseño funcional y atractivo. Llevala con vos a donde vayas. Ya sea en una cartera, morral o mochila gracias a sus prácticas medidas.",
        "categoria": "tecnologia",
        "precio": "94500",
        "stock": "10"
    },
    {
        "id":8,
        "titulo": "Celular Samsung Galaxy Note20 256 GB Gris",
        "imagen": "https://images.fravega.com/f500/4dfa8c180066ac9debe722bf0ae1795c.jpg",
        "descripcion": "El Galaxy Note 20 presenta un diseño ergonómico, elegante y delgado. Con la pantalla de 6,7 FHD con una resolución de 2400 x 1080 vas a poder sumergirte en tus juegos y videos favoritos. Además, con su tecnología Super AMOLED Plus de extremo a extremo con un marco casi inexistente, el Galaxy Note20 rediseña tus momentos en entretenimiento.",
        "categoria": "tecnologia",
        "precio": "120000",
        "stock": "6"
    },
    {
        "id":9,
        "titulo": "Impresora Multifuncional HP Ink Tank 315 (Z4B04A)",
        "imagen": "https://images.fravega.com/f500/4f00f8ee083f6292006d3629d99fc846.jpg",
        "descripcion": "Con la impresora multifunción Ink Tank 315 vas a poder imprimir, copiar y escanear documentos y fotos en forma rápida, con colores vibrantes y textos nítidos. Además, vas a poder ahorrar espacio, gracias a su diseño ultra compacto que encaja prácticamente en cualquier espacio.",
        "categoria": "tecnologia",
        "precio": "24599",
        "stock": "9"
    },
    {
        "id":10,
        "titulo": "Auriculares Headset Gamer Hyperx Cloud Core S 7.1 Pc Ps4 Usb",
        "imagen": "https://images.fravega.com/f500/c33e4fb38358631a3512d0d5f594a20e.jpg",
        "descripcion": "AURICULARES HEADSET GAMER HYPERX CLOUD CORE S 7.1 SURROUND HX-HSCC-2-BK • SONIDO ENVOLVENTE VIRTUAL 7.1 El sonido envolvente virtual 7.1 te ofrece un nivel mejorado de precisión auditiva para darte una ventaja competitiva. • CAJA DE CONTROL DE AUDIO AVANZADA Caja de control de audio USB avanzado con tarjeta de sonido de procesamiento de la señal digital (DSP) integrada que amplifica el audio y la voz. • SONIDO INIGUALABLE Altavoces direccionales de 53mm posicionados paralelos a los oídos para un sonido nítido y definido con graves mejorados.",
        "categoria": "tecnologia",
        "precio": "7899",
        "stock": "20"
    }
]

const HandPromise = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        resolve(data)
        reject('algo esta mal')
    }, 2000)
})

export default HandPromise