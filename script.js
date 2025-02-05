// Total preguntas del juego
const TOTAL_PREGUNTAS = 26;
// Tiempo del juego
const TIEMPO_DEL_JUEGO = 150;
// Estructura para almacenar las preguntas
const bd_juego = {
    A: [
        { pregunta:"Capital de Grecia", respuesta: "Atenas" },
        { pregunta:"Gas indispensable para la respiración", respuesta: "Aire" },
        { pregunta:"Ciencia que estudia los astros", respuesta: "Astronomía" },
        { pregunta:"Persona que relata sucesos de la vida diaria a través de una pluma", respuesta: "Autor" },
        { pregunta:"Serie de eventos organizados cronológicamente para explicar una situación", respuesta: "Análisis" },
        { pregunta:"Conjunto de letras que se utilizan para representar un idioma", respuesta:"Abecedario"},
        { pregunta:"Sentimiento hacia otra persona que naturalmente nos atrae y que, procurando reciprocidad en el deseo de unión, nos completa, alegra y da energía para convivir, comunicarnos y crear", respuesta:"Amor"},
        { pregunta:"Animal artrópodo muy abundante en todo el mundo", respuesta:"Araña"},
        { pregunta:"Insecto que pertenecen a la superfamilia Apoidea: Apiformes, donde también hacen parte las avispas y hormigas", respuesta:"Abeja"},
        { pregunta:"Planta leñosa que tiene un tronco y se ramifica en ramas y hojas", respuesta:"Árbol"},
    ],
    B: [
        { pregunta:"Que es extraordinariamente grande, fuerte, bueno o intenso", respuesta: "Brutal" },
        { pregunta:"Monumento en Londres con una gran torre de reloj", respuesta: "Big Ben" },
        { pregunta:"Ciudad famosa por su puente de arco", respuesta: "Brujas" },
        { pregunta:"Pequeña ave conocida por su canto nocturno", respuesta: "Búho" },
        { pregunta:"Vegetal de hojas verdes y tallo largo, se usa en ensaladas", respuesta: "Brócoli" },
        { pregunta:"Símbolo patrio y representante del espíritu de unidad, valor y patriotismo", respuesta:"Bandera"},
        { pregunta:"Otra forma de decir pelota", respuesta:"Balón"},
        { pregunta:"Poner en lugar inferior alguna cosa que estaba en alto", respuesta:"Bajar"},
        { pregunta:"Se aplica a las cosas que, percibidas por la vista o el oído, producen deleite espiritual; y, por extensión, a cosas que afectan a la inteligencia o a la sensibilidad moral con un deleite semejante; como la cara de una persona, un paisaje, una obra musical, una poesía, un rasgo generoso. Hermoso", respuesta:"Bello"},
        { pregunta:"Mamífero de 4 patas orejas largas que vive en una granja", respuesta:"Burro"},
    ],
    C: [
        { pregunta:"Lugar donde se guardan los autos", respuesta: "Cochera" },
        { pregunta:"Animal acuático conocido por sus pinzas", respuesta: "Cangrejo" },
        { pregunta:"Persona que practica el arte de la cocina", respuesta: "Chef" },
        { pregunta:"Objeto utilizado para escribir o dibujar en papel, principalmente hecho con cera", respuesta: "Crayón" },
        { pregunta:"Bebida caliente que se toma por la mañana", respuesta: "Café" },
        { pregunta:"Símbolo del calcio, elemento químico de número atómico 20", respuesta:"Ca"},
        { pregunta:"Siglas de 'Computer-Aided Engineering', ingeniería asistida por computadora que utiliza programas para el análisis y diseño de productos y estructuras", respuesta:"CAE"},
        { pregunta:"Cabeza de una viga del techo interior, que carga en el muro y sobresale al exterior, sosteniendo la corona de la cornisa", respuesta:"Can"},
        { pregunta:"Nombre propio. que se emplea en la expresión alma de Caía, con que se designa a la persona aviesa o cruel", respuesta:"Cain"},
        { pregunta:"Soportes de tres o cuatro patas utilizados para sostener un objeto, especialmente en pintura o carpintería", respuesta:"Caballetes"},
    ],
    D: [
        { pregunta:"Objeto cúbico utilizado en juegos de mesa para obtener números al azar", respuesta: "Dado" },
        { pregunta:"Mamífero marino, famoso por su inteligencia y simpatía", respuesta: "Delfín" },
        { pregunta:"Palabra que se utiliza para describir un estado de felicidad plena y satisfacción", respuesta: "Dicha" },
        { pregunta:"Término empleado para referirse a un conflicto o desacuerdo", respuesta: "Disputa" },
        { pregunta:"Proceso de encontrar y corregir errores en un programa de computadora", respuesta: "Depuración" },
        { pregunta:"Cada uno de los grados o categorías superiores entre los practicantes de deportes originarios del Japón, como el judo o el kendo", respuesta:"Dan"},
        { pregunta:"Lanza arrojadiza, corta y delgada, que se tira con la mano", respuesta:"Dardo"},
        { pregunta:"Río de los Estados Unidos, que nace en la parte N, del Estado de Dakota Septentrional, y desagua en el Missouri, en la parte SE, del Estado de Dakota Meridional", respuesta:"Dakota"},
        { pregunta:"Natural de Dalmacia, región de la antigua Yugoslavia. También se usa como sustantivo", respuesta:"Dálmata"},
        { pregunta:"Falta de vigor o fuerza", respuesta:"Debilidad"},
    ],
    E: [
        { pregunta:"Siglas de la empresa estadounidense que se dedica al desarrollo, edición y distribución de software de entretenimiento interactivo, como 'FIFA', 'Sims', entre otros", respuesta:"EA"},
        { pregunta:"Repetición del sonido, cuando la onda sonora es reflejada por algún obstáculo", respuesta:"Eco"},
        { pregunta:"Yo, parte de la estructura psíquica que regula el sentido de identidad personal y la realidad", respuesta:"Ego"},
        { pregunta:"Árbol ebenáceo de la India y Archipiélago malayo, cuya madera maciza, lisa, dura y negra en el centro, es muy apreciada en ebanistería. Pertenece al género diospiro y se conocen diversas especies, tales como las llamadas científicamente Diospyros ebenum, Diospyros melanoxilon, Diospyros silvatica", respuesta:"Ébano"},
        { pregunta:"Persona que saca a la luz pública una obra, ajena por lo general, valiéndose de la imprenta o de otro arte gráfico para multiplicar los ejemplares", respuesta:"Editor"},
        { pregunta:"Mamífero terrestre, el más grande del planeta", respuesta: "Elefante" },
        { pregunta:"Fenómeno astronómico en el que la Luna se interpone entre la Tierra y el Sol, ocasionando el oscurecimiento temporal de este último", respuesta: "Eclipse" },
        { pregunta:"Término que se utiliza para describir una construcción de varios pisos que alberga viviendas u oficinas", respuesta: "Edificio" },
        { pregunta:"Palabra que describe un estado de intensa alegría y entusiasmo, a menudo experimentado de forma repentina", respuesta: "Euforia" },
        { pregunta:"Término que se emplea para designar el conjunto de colores que se obtiene cuando la luz blanca se descompone al pasar por un prisma", respuesta: "Espectro" },
    ],
    F: [ 
        { pregunta:"Cuarta nota de la escala diatónica que comienza en do. Su nombre fue tomado por Guido d'Arezzo del himno de San Juan Bautista: Ut queant laxis resonare fibris, Mira gestorum famuli tuorum, Solve polluti labii reatum, Sancte Ioannes.", respuesta:"Fa"},
        { pregunta:"Dícese del partidario exaltado de algo, de un deporte, de un artista de cine, etc. Equivale a hincha. Es anglicismo", respuesta:"Fan"},
        { pregunta:"Sistema que permite transmitir a distancia por la línea telefónica escritos o gráficos", respuesta:"Fax"},
        { pregunta:"Término coloquial para referirse a un cigarrillo en varios países de América Latina", respuesta:"Faso"},
        { pregunta:"Que se puede hacer o lograr sin gran trabajo o esfuerzo", respuesta:"Fácil"},
        { pregunta:"Deporte que se juega en estadio y en el que los equipos intentan marcar goles pateando una pelota", respuesta: "Fútbol" },
        { pregunta:"Mamífero marino, de cuerpo aerodinámico y adaptado a climas fríos, se alimenta principalmente de peces", respuesta: "Foca"},
        { pregunta:"Hebras finas de pasta que se utilizan en numerosos platos tradicionales en diferentes culturas", respuesta: "Fideos"},
        { Pregunta:"Adjetivo que se utiliza para describir un estado de bienestar y alegría", respuesta: "Felicidad"},
        { pregunta:"Instrumento musical de viento, de tubo y sin teclas, es conocido por su sonido suave y melodioso", respuesta: "Flauta"},
    ],
    G: [
        { pregunta:"Abreviatura de gran órgano, usada en las partituras de música de órgano para indicar que debe utilizarse el teclado principal", respuesta:"Go"},
        { pregunta:"Cualquier fluido aeriforme a la presión y temperatura ordinarias que ocupa todo el espacio disponible del redplente que lo contiene y está constituido por moléculas que se mueven libremente en el espacio", respuesta:"Gas"},
        { pregunta:"Siglas de Global Positioning System, un sistema de posicionamiento global que permite la localización geográfica exacta mediante satélites, ampliamente usado en navegación, transporte y aplicaciones de geolocalización", respuesta:"GPS"},
        { pregunta:"Hembra del gamo", respuesta:"Gama"},
        { pregunta:"Cualquier piedra preciosa", respuesta:"Gema"},
        { pregunta:"Mamifero, el más grande de los simios, habita en los bosques tropicales de África", respuesta: "Gorila" },
        { pregunta:"Fuerza natural es la responsable de mantener a los planetas en sus órbitas alrededor del Sol", respuesta: "Gravedad" },
        { pregunta:"Adjetivo utilizado para describir algo auténtico y sin imitación", respuesta:"Genuino"},
        { pregunta:"Instrumento musical de cuerda, muy popular en diversos géneros, se toca generalmente con una púa", respuesta: "Guitarra"},
        { pregunta:"¿Cómo se denomina a una persona que actúa con altruismo y desprendimiento, ayudando a los demás sin esperar nada a cambio?", respuesta: "Generoso"},
    ],
    H: [
        { pregunta:"Cuando se rompe la seguridad de un sistema para obtener información y convertirse en el administrador de la red", respuesta:"Hack"},
        { pregunta:"Planta gramínea, de cañitas delgadas, hojas estrechas, y flores en panoja, con arista en el cascabillo", respuesta:"Heno"},
        { pregunta:"Prolífico goleador, es reconocido por su ritmo, fuerza y atléticos movimientos con y sin balón, y es frecuentemente considerado como uno de los mejores delanteros de la actualidad", respuesta:"Haaland"},
        { pregunta:"Olor extremadamente desagradable y penetrante, que provoca repulsión", respuesta:"Hedor"},
        { pregunta:"Herramienta con un filo metálico que está fijado de forma segura a un mango, generalmente de madera, cuya finalidad es el corte mediante golpes", respuesta:"Hacha"},
        { pregunta:"Mamífero de gran tamaño, que habita en ríos y lagos de África, se caracteriza por su piel gruesa y su gran boca", respuesta:"Hipopotamo"},
        { pregunta:"Insecto, famoso por su capacidad para trabajar en equipo y levantar cargas mucho mayores a su tamaño", respuesta: "Hormiga"},
        { pregunta:"Ave rapaz, conocida por su velocidad y agilidad en vuelo, es a menudo símbolo de libertad", respuesta: "Halcón"},
        { pregunta:"Vehículo aéreo, que se caracteriza por el uso de hélices y es empleado en labores de rescate y transporte en zonas de difícil acceso, se conoce comúnmente por sus siglas", respuesta: "Helicóptero"},
        { pregunta:"Postre frío y dulce, muy popular durante los meses de verano, se disfruta en muchas partes del mundo", respuesta: "Helado"},
    ],
    I:[
        { pregunta:"Abreviatura de IDentification, información única asignada a entidades, usuarios o dispositivos en un sistema, permitiendo su reconocimiento y control en bases de datos y redes de seguridad", respuesta:"ID"},
        { pregunta:"International Business Machines, empresa multinacional estadounidense reconocida por su liderazgo en tecnología informática y desarrollo de software. Fundada en 1911, ha influido notablemente en la industria tecnológica mundial", respuesta:"IBM"},
        { pregunta:"Que significa 'lo mismo', y suele usarse para evitar la repetición de las mismas frases o palabras en las citas de un texto, en las listas, relaciones, cuentas", respuesta:"Ídem"},
        { pregunta:"De fuego o que participa de su naturaleza", respuesta:"Ígneo"},
        { pregunta:"Persona engreída sin fundamento para ello. También se usa como sustantivo", respuesta:"Idiota"},
        { pregunta:"País asiático, famoso por el Taj Mahal", respuesta:"India"},
        { pregunta:"Órgano del sistema digestivo encargado de absorber los nutrientes de los alimentos", respuesta:"Intestino"},
        { pregunta:"Disciplina encargada del estudio y procesamiento de la información mediante computadoras", respuesta:"Informática"},
        { pregunta:"Palabra se usa para referirse a una persona que carece de conocimientos sobre un tema en particular", respuesta:"Ignorante"},
        { pregunta:"Término que se usa para referirse a una orden o conjunto de órdenes que una computadora ejecuta para realizar una tarea específica", respuesta:"Instrucción"},
    ],
    J: [
        { pregunta:"lenguaje de programación orientado a objetos y multiplataforma, que se utiliza para crear aplicaciones y software. Es un lenguaje versátil que se puede usar para programar dispositivos móviles, equipos, y aplicaciones web. ", respuesta:"Java"},
        { pregunta:"Figura central del cristianismo, considerado por los creyentes como el hijo de Dios y salvador de la humanidad, quien murió en la cruz y resucitó", respuesta:"Jesús"},
        { pregunta:"Que tiene poca edad. También se usa como sustantivo.", respuesta:"Joven"},
        { pregunta:"Mamífero paquidermo, bastante común en los montes de España, que es la variedad salvaje del cerdo, del cual se distingue por tener la cabeza más aguda, la jeta más prolongada, las orejas siempre tiesas, el pelaje muy tupido, fuerte, de color gris uniforme, y los colmillos grandes y salientes de la boca", respuesta:"Jabalí"},
        { pregunta:"Respirar fatigosamente a causa del cansancio", respuesta:"Jadear"},
        { pregunta:"Género musical, nacido en Nueva Orleans, se caracteriza por la improvisación y el uso de instrumentos de viento", respuesta:"Jazz"},
        { pregunta:"País de América Central que es conocido por sus playas caribeñas y su café", respuesta:"Jamaica"},
        { pregunta:"Prenda de vestir, comúnmente de tela resistente como el denim, se usa en las piernas", respuesta:"Jeans"},
        { pregunta:"Recipiente generalmente con tapa, que se usa para guardar líquidos", respuesta:"Jarra"},
        { pregunta:"¿Qué palabra se usa para describir una acción divertida que se hace para hacer reír a alguien?", respuesta:"Juego"},
    ],
    K: [
        { pregunta:"Es el fruto de la actinidia, planta trepadora de la familia de las actinidiáceas", respuesta:"Kiwi"},
        { pregunta:"Canoa de pesca usada por los esquimales, tradicionalmente fabricada con piel de foca, cuya cubierta solo tiene una abertura, cerrada con un material impermeable que se ajusta al tronco del tripulante", respuesta:"Kayak"},
        { pregunta:"Unidad de medida de información que equivale a mil bits; frecuentemente usada en referencia a la velocidad de transferencia de datos, como en el contexto de internet", respuesta:"Kilobits"},
        { pregunta:"Medida de longitud que tiene mil metros. Se toma como unidad para las medidas itinerarias", respuesta:"Kilómetro"},
        { pregunta:"Forma femenina singular del adjetivo 'kampucheano', que se refiere a algo o alguien originario o relacionado con Kampuchea (nombre histórico de Camboya)", respuesta:"Kampucheana"},
        { pregunta:"Arte marcial de origen japonés se enfoca en golpes de puño y patadas", respuesta:"Karate"},
        { pregunta:"Unidad de medida se usa para indicar el peso de algo y equivale a 1,000 gramos", respuesta:"Kilogramo"},
        { pregunta:"Vitamina esencial para la coagulación de la sangre", respuesta:"K"},
        { pregunta:"Animal africano, similar a un búfalo, es conocido por su agresividad y su gran tamaño", respuesta:"Kudu"},
        { pregunta:"Isla del océano Pacífico, famosa por ser el destino turístico más popular de Hawái", respuesta:"Kauai"},
    ],
    L: [
        { pregunta:"Sexta nota de la escala diatónica de do. Era la primera nota en la antigua escala fundamental de los países latinos", respuesta:"La"},
        { pregunta:"Pantalla de cristal líquido, usada generalmente en las notebooks y otras computadoras pequeñas", respuesta:"LCD"},
        { pregunta:"Quinto signo del Zodíaco que el Sol recorre aparentemente del 22 de julio al 22 de agosto", respuesta:"Leo"},
        { pregunta:"Materias en fusión que arrojan los volcanes y que corren por las laderas de éstos. Están consIItuidas por diversos silicatos predominando los basaltos, fonolitas, traquitas y andesitas, y su temperatura, en un principio, es elevadísima, oscilando entre los 800 y los 2.000 grados centígrados", respuesta:"Lava"},
        { pregunta:"Jugo propio de muchos vegetales, que circula por los vasos laticíferos, tiene una composición muy compleja y de él se obtienen sustancias tan diversas como el caucho, la gutapercha, etcétera El de ciertas plantas es venenoso, como el del manzanillo, el de otras muy acre, como el de la higuera común, y el del árbol de la leche es dulce y utilizable como alimento", respuesta:"Látex"},
        { pregunta:"Animal, conocido como el rey de la selva, es símbolo de fuerza y majestad", respuesta:"León"},
        { pregunta:"Objeto eléctrico se utiliza para iluminar espacios", respuesta:"Lámpara"},
        { pregunta:"¿Qué palabra se utiliza para designar a la persona que dirige o encabeza un grupo?", respuesta:"Líder"},
        { pregunta:"Energía proveniente del sol, esencial para la fotosíntesis en las plantas", respuesta:"Luz"},
        { pregunta:"Baile de origen brasileño que se popularizó internacionalmente en los años 80 por su ritmo contagioso", respuesta:"Lambada"},
    ],
    M: [
        { pregunta:"Negación del bien; cosa contraria al bien; lo que se aparta de lo lícito", respuesta:"Mal"},
        { pregunta:"Sacerdote de la religión de Zoroastro. También se usa como sustantivo", respuesta:"Mago"},
        { pregunta:"Cualquier organización clandestina de criminales", respuesta:"Mafia"},
        { pregunta:"Serpiente venenosa de los trópicos africanos, famosa por su rapidez y agresividad; existen varias especies", respuesta:"Mamba"},
        { pregunta:"Término que se refiere a las religiones afrobrasileñas, como el candomblé y la umbanda. También se usa para referirse a la magia y la posesión del espíritu en estos cultos", respuesta:"Macumba"},
        { pregunta:"Planeta del sistema solar es conocido como el 'planeta rojo'", respuesta:"Marte"},
        { pregunta:"Mamífero marino, de tamaño pequeño y ágil, es similar al delfín", respuesta:"Marsopa"},
        { pregunta:"¿Qué término se utiliza para referirse al conjunto de mitos y leyendas que explican el origen de los dioses y héroes en diversas culturas?", respuesta:"Mitología"},
        { pregunta:"Proceso de cambio de posición o desplazamiento de un objeto o ser", respuesta:"Movimiento"},
        { pregunta:"Término empleado en ortografía para designar la letra que se escribe en tamaño mayor al inicio de una oración o en nombres propios", respuesta:"Mayúscula"},
    ],
    N: [
        { pregunta:"Símbolo del sodio, elemento químico de número atómico 11. Es un metal alcalino blando y plateado que reacciona vigorosamente con el agua. Su punto de fusión es de 97.8 °C", respuesta:"Na"},
        { pregunta:"Acrónimo en inglés que significa 'Not a Number' (no es un número). Se utiliza en informática para indicar que el resultado de una operación no es un número válido", respuesta:"NaN"},
        { pregunta:"Red. Conjunto de redes informáticas interconectadas a nivel mundial, comúnmente conocido como Internet", respuesta:"Net"},
        { pregunta:"Planta crucífera, llamada por los naturalistas brassica napus, hortense, procedente de la China, según se cree, de hojas glaucas, flores amarillas, fruto en vainillas cilíndricas, con quince o veinte semillas, y raíz comestible, fusiforme, blanca o amarillenta", respuesta:"Nabo"},
        { pregunta:"Capa de agua subterránea", respuesta:"Napa"},
        { pregunta:"Mamífero acuático, de pelaje denso y ágil en el agua, es conocido por construir madrigueras a orillas de ríos y lagos", respuesta:"Nutria"},
        { pregunta:"País Áfricano, cuya capital es Niamey, se encuentra al oeste del continente", respuesta:"Níger"},
        { pregunta:"Fruto cítrico, de color vibrante y alto contenido en vitamina C", respuesta:"Naranja"},
        { pregunta:"Término empleado para describir la parte central o esencial de algo", respuesta:"Núcleo"},
        { pregunta:"Cetáceo del Ártico, conocido por su singular colmillo en espiral, es apodado el 'unicornio del mar'", respuesta:"Narval"},
    ],
    O: [
        { pregunta:"Ganso doméstico, por lo general de color completamente blanco", respuesta:"Oca"},
        { pregunta:"Compañero de Kakashi Hatake y Rin Nohara, alumno de Minato Namikaze y fue quien le dio a Kakashi su Sharingan izquierdo.", respuesta:"Obito Uchiha", respuesta:"Obito"},
        { pregunta:"Dícese de quien es excesivamente gordo", respuesta:"Obeso"},
        { pregunta:"Gigante que, según las mitologías y consejas de los pueblos del norte de Europa, se alimentaba de carne humana", respuesta:"Ogro", respuesta:"Ogresa"},
        { pregunta:"Arbol oleáceo, llamado científicamente olea europœa, originario de Oriente, con tronco torcido, copa ancha y ramosa, hojas persistentes, elípticas, verdes por la haz y blanquecinas por el envés, flores menudas y por fruto la aceituna, pequeña drupa ovoide, de sabor muy amargo, color verde amarillento característico a veces morado, pulpa muy oleosa cuando ha llegado a completa madurez y con un hueso que encierra la semilla", respuesta:"Olivo"},
        { pregunta:"Palabra utilizada para describir el momento en que el sol se oculta en el horizonte", respuesta:"Ocaso"},
        { pregunta:"Masa de agua salada que cubre la mayor parte de la superficie de la Terrestre", respuesta:"Océano"},
        { pregunta:"Planta famosa por sus vistosas y exóticas flores, muy apreciada en jardinería", respuesta:"Orquídea"},
        { pregunta:"¿Qué término se emplea en física para describir un patrón que se repite en el espacio o el tiempo?", respuesta:"Onda"},
        { pregunta:"Instrumento musical de viento, de forma ovalada y de origen ancestral", respuesta:"Ocarina"},
    ],
    P: [
        { pregunta:"Símbolo del protoactinio, elemento químico de número atómico 91. Es un metal denso, de color plateado y radiactivo", respuesta:"Pa"},
        { pregunta:"Cantidad mínima de datos que se transmite en una red o entre dispositivos. Tiene una estructura y longitud distinta según el protocolo al que pertenezca. También llamado TRAMA", respuesta:"PACK"},
        { pregunta:"Instrumento que se compone de una tabla de madera o de una plancha metálica de forma rectangular, o de trapecio, y un mango más o menos largo según sus usos", respuesta:"Pala"},
        { pregunta:"Conjunto de casillas de cera en forma de prismas hexagonales, que las abejas fabrican en la colmena, y en Jas cuales depositan la flamación dolorosa del pulpejo del dedo de la mano o del pie, que desaparece espontáneamente al cabo de unos días; se presenta en el curso de la endocarditis", respuesta:"Panal"},
        { pregunta:"Cada una de las llanuras extensas de América del Sur que no tienen vegetación arbórea", respuesta:"Pampa"},
        { pregunta:"¿Qué ave, símbolo de paz y presente en diversas culturas, se menciona en relatos bíblicos?", respuesta:"Paloma"},
        { pregunta:"Instrumento musical de percusión, redondo y con parches, se toca golpeándolo y es común en diversas músicas folclóricas", respuesta:"Pandereta"},
        { pregunta:"Deporte ecuestre consiste en montar a caballo y golpear una pequeña pelota con un mazo", respuesta:"Polo"},
        { pregunta:"Utensilio que se utiliza en la cocina para calentar agua y preparar infusiones", respuesta:"Pava"},
        { pregunta:"¿Qué objeto, que oscila regularmente, se emplea en relojes tradicionales para medir el tiempo?", respuesta:"Péndulo"},
    ],
    Q: [
        { pregunta:"Masa hecha de leche cuajada, exprimida y aderezada con sal para que se conserve, la cual se moldea y puede disponerse en varias formas", respuesta:"Queso"},
        { pregunta:"Dícese del indio que al tiempo de la colonización del Perú habitaba la región del Cuzco; por extensión, dícese de otros indios pertenecientes al imperio incaico. También se usa como sustantivo", respuesta:"Quechua"},
        { pregunta:"Pretérito perfecto de Quemar", respuesta:"Quemado"},
        { pregunta:"Dícese de quien ha hecho quiebra o bancarrota. También se usa como sustantivo", respuesta:"Quebrado"},
        { pregunta:"Evolución de Cyndaquil", respuesta:"Quilava"},
        { pregunta:"Ave, símbolo nacional de Guatemala, es conocida por sus vibrantes plumas", respuesta:"Quetzal"},
        { pregunta:"Campeón de 'League of Legends', destaca por su agilidad y ataques a distancia", respuesta:"Quinn"},
        { pregunta:"Término utilizado en física para referirse a una de las partículas fundamentales que constituyen la materia", respuesta:"Quark"},
        { pregunta:"¿Cómo se denomina el protagonista de la clásica novela 'Don Quijote de la Mancha' de Miguel de Cervantes?", respuesta:"Quijote"},
        { pregunta:"Palabra que describe un estado de calma y ausencia de movimiento", respuesta:"Quietud"},
    ],
    R: [
        { pregunta:"Segunda nota de la escala musical", respuesta:"Re"},
        { pregunta:"Acrónimo que significa memoria de acceso aleatorio (Random Access Memory), y es un componente fundamental de los dispositivos informáticos. Se trata de un tipo de memoria temporal que almacena los datos que el procesador necesita para ejecutar programas y abrir archivos", respuesta:"RAM"},
        { pregunta:"Trozo de calamar rebozado y frito", respuesta:"Raba", respuesta:"Rabas"},
        { pregunta:"Carril de las vías férreas, elemento metálico que forma parte del sistema ferroviario por donde circulan los trenes", respuesta:"Raíl",respuesta:"Riel"},
        { pregunta:"Adjetivo de origen inglés que significa 'aleatorio'", respuesta:"Random"},
        { pregunta:"Pequeño roedor, reconocido por sus grandes orejas, es un símbolo de la cultura pop", respuesta:"Ratón"},
        { pregunta:"Juego de estrategia en tiempo real, ambientado en una historia alternativa de la Guerra Fría", respuesta:"Red Alert"},
        { pregunta:"Piedra preciosa de intenso color rojo es muy valorada en joyería y simboliza la pasión", respuesta:"Rubí"},
        { pregunta:"¿Qué término se utiliza en física para describir el movimiento de girar alrededor de un eje?", respuesta:"Rotación"},
        { pregunta:"Palabra empleada para referirse a una narración o cuento, generalmente contado de forma entretenida", respuesta:"Relato"},
    ],
    S: [
        { pregunta:"Bebida alcohólica japonesa, preparada por la fermentación del arroz con un fermento especial", respuesta:"Sake"},
        { pregunta:"Término coloquial que se refiere a una pitada, especialmente de marihuana. También puede ser un adjetivo que se usa para describir a una persona que es fría, distante o poco amistosa", respuesta:"Seca"},
        { pregunta:"Perfecto, puro y limpio de toda culpa. Aplicase sólo a Dios con toda propiedad; pero, por gracia y participación, dícese también de los ángeles y de los hombres", respuesta:"Santo"},
        { pregunta:"Aplicase a quien tiene y posee la sabiduría. Usualmente más común como sustantivo", respuesta:"Sabio"},
        { pregunta:"Pez teleósteo de hasta metro y medio de longitud, de cuerpo rollizo, cabeza apuntada y una aleta adiposa dorsal junto a la cola, de lomo azulado, vientre plateado, con reflejos irisados en los costados, que remonta los ríos para desovar, y cuya carne, rojiza y sabrosa, es muy apreciada", respuesta:"Salmón"},
        { pregunta:"Palabra que describe un sentimiento de gran agrado o bienestar", respuesta:"Satisfacción"},
        { pregunta:"¿Cómo se denomina una cadena montañosa o una sección de montañas caracterizada por picos y valles?", respuesta:"Sierra"},
        { pregunta:"Acción que se realiza para mostrar cortesía y reconocimiento al encontrarse con alguien?", respuesta: "Saludar"},
        { pregunta:"Videojuego de estrategia en tiempo real, desarrollado por Blizzard Entertainment, se ambienta en un universo futurista y espacial", respuesta:"StarCraft"},
        { pregunta:"Saga de videojuegos de lucha, es famosa por sus combates intensos y personajes icónicos", respuesta:"Street Fighter"},
    ],
    T: [
        { pregunta:"Arbusto teáceo del Oriente, llamado por los botánicos camelia sinensis, y también thea sinensis, de hojas elípticas, flores blancas, y fruto capsular, globoso, con tres semillas negruzcas. Contiene el alcaloide teína o cafeína, diurético, estimulante cardiaco y ligeramente laxante", respuesta:"Té"},
        { pregunta:"Condición de las personas, instituciones y cosas a las que no es lícito censurar o mencionar", respuesta:"Tabú"},
        { pregunta:"Término coloquial que se usa para referirse a las personas de origen italiano", respuesta:"Tano"},
        { pregunta:"Obstinado, terco, firme, porfiado y pertinaz en una idea o propósito", respuesta:"Tenaz"},
        { pregunta:"Que se puede tocar", respuesta:"Táctil"},
        { pregunta:"Videojuego de acción, aventura y de sandbox producido de forma independiente por el estudio Re-Logic. Tiene características tales como la exploración, la artesanía, la construcción de estructuras y el combate", respuesta:"Terraria"},
        { pregunta:"Deporte, que se juega sobre una mesa con una pequeña pelota y raquetas", respuesta:"Tenis de mesa"},
        { pregunta:"Fenómeno meteorológico, caracterizado por fuertes vientos en forma de embudo", respuesta:"Tornado"},
        { pregunta:"Disciplina que estudia los números, las formas y las relaciones entre ellos", respuesta:"Trigonometría"},
        { pregunta:"Estructura metálica de gran altura y es uno de los monumentos más icónicos del mundo", respuesta:"Torre Eiffel"},
    ],
    U: [
        { pregunta:"Cadena de caracteres que indica la ubicación de un archivo o página web en internet", respuesta:"URL"},
        { pregunta:"Empresa francesa de videojuegos que se dedica a crear y distribuir entretenimiento interactivo. Fue fundada en 1986 por los cinco hermanos Guillemot, es conocida por crear éxitos como Assassin's Creed y Just Dance", respuesta:"Ubisoft"},
        { pregunta:"El cambiapieles más poderoso que existe, tiene la capacidad de comunicarse con todos los espíritus del Fréljord, ya sea al entender de forma empática sus necesidades o al transformar su energía etérea en su propio estilo de lucha salvaje", respuesta:"Udyr"},
        { pregunta:"Conformidad, conexión o enlace de una cosa con otra", respuesta:"Unión"},
        { pregunta:"Militar y político argentino. Fue varias veces gobernador de la provincia de Entre Ríos, líder del Partido Federal y presidente de la Confederación Argentina entre 1854 y 1860", respuesta:"Urquiza", respuesta:"Justo José de Urquiza"},
        { pregunta:"País de América del Sur, tiene a Montevideo como su capital", respuesta:"Uruguay"},
        { pregunta:"¿Qué empresa desarrolladora de videojuegos es responsable de sagas como Assassin’s Creed, Far Cry y Just Dance?", respuesta:"Ubisoft"},
        { pregunta:"Adjetivo que se usa para describir algo que no tiene igual o que es extraordinario en su tipo", respuesta:"Único"},
        { pregunta:"Instrumento musical de cuerda, similar a una guitarra ", respuesta:"Ukelele", respuesta: "Ukulele"},
        { pregunta:"¿Cómo se llama la estructura en forma de tubo que conecta la vejiga con el exterior del cuerpo y permite la expulsión de la orina?", respuesta:"Uretra"},
    ],
    V: [
        { pregunta:"", respuesta:""},
        { pregunta:"", respuesta:""},
        { pregunta:"", respuesta:""},
        { pregunta:"", respuesta:""},
        { pregunta:"", respuesta:""},
        { pregunta:"Deporte dos equipos donde intentan hacer que un balón toque el suelo en el campo del equipo contrario, utilizando principalmente las manos", respuesta:"Vóley"},
        { pregunta:"Automóvil de grandes dimensiones diseñado para transportar carga o personas", respuesta:"Van"},
        { pregunta:"Parte del cuerpo humano responsable de bombear la sangre y mantener la circulación en el organismo", respuesta:"Ventrículo"},
        { pregunta:"Videojuego de supervivencia y sandbox, desarrollado por el estudio sueco 'Iron Gate Studio' y publicado por 'Coffee Stain Studios'", respuesta:"Valheim"},
        { pregunta:"Órgano del sistema circulatorio encargado de llevar la sangre de regreso al corazón", respuesta:"Vena"},
    ],
    W: [
        { pregunta:"Estrictamente es la parte de Internet a la que accedemos a través del protocolo HTTP y en consecuencia gracias a Browsers normalmente gráficos como Netscape", respuesta:"Web"},
        { pregunta:"Juego acuático análogo al fútbol, que se lleva a cabo en piscinas especiales. Los jugadores se mueven valiéndose de la natación y la pelota se impulsa con las manos para conseguir introducirla el mayor número de veces en la portería del equipo contrario", respuesta:"Waterpolo"},
        { pregunta:"Aguardiente obtenido de cereales destilados y fermentados y envejecido en barriles de madera", respuesta:"Whisky"},
        { pregunta:"Enemigo en el juego Minecraft. Se trata de un personaje que puede atacar a los jugadores con ataques cuerpo a cuerpo y con explosiones sónicas", respuesta:"Warden"},
        { pregunta:"Elemento típico de los multiplayer game battle arena (MOBA), como League of Legends, y en español podríamos decir que es un guardián de visión", respuesta:"Ward"},
        { pregunta:"Sistema de comunicación sin cables, permite conectar dispositivos electrónicos a internet", respuesta:"WiFi"},
        { pregunta:"Videojuego de estrategia en tiempo real, enfrenta a orcos y humanos en un mundo de fantasía", respuesta:"Warcraft"},
        { pregunta:"Torneo de tenis jugado en césped y considerado el más antiguo del mundo", respuesta:"Wimbledon"},
        { pregunta:"Palabra en inglés se usa para referirse a una persona que ha ganado algo", respuesta:"Winner"},
        { pregunta:"Sistema operativo ampliamente utilizado en computadoras personales y de oficina", respuesta:"Windows"},
    ],
    X: [
        { pregunta:"'CONTIENE X'... Accesorios de ciertas máquinas, como los automóviles, los televisores, etcétera, que no van incorporados al modelo ordinario", respuesta:"Extra"},
        { pregunta:"'CONTIENE X'... Arte de disecar los animales para conservarlos con apariencia de vivos", respuesta:"Taxidermia"},
        { pregunta:"'CONTIENE X'... Cada uno de los principios indemostrables sobre los que, por medio de un razonamiento deductivo, se construye una teoría", respuesta:"Axioma"},
        { pregunta:"'CONTIENE X'... Conjunto enorme de estrellas, polvo interestelar, gases y partículas, que constituye un sistema autónomo dentro del universo", respuesta:"Galaxia"},
        { pregunta:"Trastorno hereditario raro caracterizado por una extrema sensibilidad a los rayos ultravioleta, como los del sol", respuesta:"Xerodermia"},
        { pregunta:"Instrumento musical de percusión, compuesto por láminas metálicas afinadas", respuesta:"Xilófono", respuesta: "Xilófon"},
        { pregunta:"Consola de videojuegos, compite con PlayStation y Nintendo", respuesta:"Xbox"},
        { pregunta:"Elemento químico, cuyo símbolo es Xe", respuesta:"Xenón"},
        { pregunta:"Empresa china dedicada a hacer tanto teléfonos como diversos artículos para el hogar y autos eléctricos", respuesta:"Xiaomi"},
        { pregunta:"Adjetivo que significa que algo proviene de un individuo de una especie distinta", respuesta:"Xenogénico"},
    ],
    Y: [
        { pregunta:"Inmediatamente, ahora mismo. Usado también en sentido enfático", respuesta:"Ya"},
        { pregunta:"Cónyuge masculino de la hija o del hijo de una persona", respuesta:"Yerno"},
        { pregunta:"Empresa argentina5​ de energía dedicada a la exploración, explotación, destilación, distribución y producción de gas, petróleo, energía eléctrica y derivados de hidrocarburos y venta de combustibles, lubricantes, fertilizantes, plásticos y otros productos relacionados con la industria", respuesta:"YPF"},
        { pregunta:"Sitio donde se halla naturalmente una roca, un mineral o un fósil", respuesta:"Yacimiento"},
        { pregunta:"Planeta del manga y anime de Dragon Ball donde sus habitantes son conocidos por su debilidad física y su habilidad para manipular el espacio y el tiempo", respuesta:"Yardrat"},
        { pregunta:"Elemento químico que se encuentra en la naturaleza y es esencial para la salud humana y animal. Se usa en la industria química, en la medicina y como desinfectante", respuesta:"Yodo"},
        { pregunta:"Equivalente japonés a la mafia", respuesta:"Yakuza"},
        { pregunta:"Localidad y municipio del departamento de Calamuchita, en la provincia de Córdoba, República Argentina", respuesta:"Yacanto"},
        { pregunta:"Práctica que conecta el cuerpo, la respiración y la mente", respuesta:"Yoga"},
        { pregunta:"Herramienta de hierro acerado que se utiliza para trabajar metales con martillo", respuesta:"Yunque"},
    ],
    Z: [
        { pregunta:"Dios del cielo y el trueno en la mitología griega. Era el rey de los dioses olímpicos y el gobernante del Olimpo. Se le consideraba el padre de los dioses y de los hombres", respuesta:"Zeus"},
        { pregunta:"País africano ubicado en el África Austral. Su nombre proviene de la expresión shona Dzimba dza mabwe, que significa 'grandes casas de piedra'", respuesta:"Zimbabue"},
        { pregunta:"Persona que se supone muerta y reanimada por arte de brujería con el fin de dominar su voluntad", respuesta:"Zombi", respuesta:"Zombie"},
        { pregunta:"Producir ruido o sonido continuado y bronco, como el que se produce a veces dentro de los mismos oídos", respuesta:"Zumbar"},
        { pregunta:"Líquido de las hierbas, flores, frutas u otras cosas semejantes, que se saca exprimiéndolas o majándolas", respuesta:"Zumo"},
        { pregunta:"Periodo de tiempo en el que se cosecha la caña de azúcar para producir azúcar y etanol", respuesta:"Zafra"},
        { pregunta:"Piedra preciosa con característico color azul", respuesta:"Zafiro"},
        { pregunta:"Tubérculo naranja y con grandes hojas alargadas", respuesta:"Zanahoria"},
        { pregunta:"Oligoelemento esencial que se encuentra comúnmente en las carnes rojas, las aves y el pescado", respuesta:"Zinc"},
        { pregunta:"Perteneciente o relativo a la mano izquierda", respuesta:"Zurdo"},
    ],
};

// Obtener elementos de música
const musicaMenu = document.getElementById("musica-menu");
const musicaJuego = document.getElementById("musica-juego");
const musicaPocoTiempo = document.getElementById("musica-poco-tiempo");

// Reproducir música al cargar la pantalla de inicio
window.onload = function() {
    musicaMenu.play().catch(error => {
        console.error("Error al intentar reproducir la música del menú:", error);
    });
}

// Inicialización de variables
var estadoPreguntas = Array(TOTAL_PREGUNTAS).fill(0);
var cantidadAcertadas = 0;
var numPreguntaActual = -1;
let timeLeft = TIEMPO_DEL_JUEGO;
var countdown;

// Almacena la pregunta actual de cada letra
var preguntasActuales = {};

// Obtener elementos del DOM
const timer = document.getElementById("tiempo");
const comenzar = document.getElementById("comenzar");
const respuesta = document.getElementById("respuesta");
const responder = document.getElementById("responder");
const pasar = document.getElementById("pasar");
const recomenzar = document.getElementById("recomenzar");
const container = document.querySelector(".container");

// Eventos
comenzar.addEventListener("click", iniciarJuego);
respuesta.addEventListener("keyup", manejarTecla);
responder.addEventListener("click", controlarRespuesta);
pasar.addEventListener("click", pasarPregunta);
recomenzar.addEventListener("click", reiniciarJuego);

// Crear los círculos de letras
const numCirculos = TOTAL_PREGUNTAS; // Total de círculos
const radio = 250; // Radio del círculo en el que se colocarán los círculos
for (let i = 0; i < numCirculos; i++) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.textContent = String.fromCharCode(i + 65); // Letras A-Z
    circle.id = String.fromCharCode(i + 65);
    container.appendChild(circle);
    
    // Calcular la posición de cada círculo
    const angle = (i / numCirculos) * Math.PI * 2 - (Math.PI / 2);
    const x = Math.round(225 + radio * Math.cos(angle));
    const y = Math.round(225 + radio * Math.sin(angle));
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
}

// Funciones
function iniciarJuego() {
    musicaMenu.pause(); // Detener la música del menú
    musicaMenu.currentTime = 0; // Reiniciar la música del menú
    musicaJuego.play().catch(error => {
        console.error("Error al intentar reproducir la música del juego:", error);
    });
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    largarTiempo();
    cargarPregunta();
}

function manejarTecla(event) {
    if (event.key === "Enter") {
        if (respuesta.value === "") {
            alert("Debe ingresar un valor!!");
            return;
        }
        controlarRespuesta(respuesta.value.toLowerCase());
    }
}

responder.addEventListener("click", function () {
    if (respuesta.value === "") {
        alert("Debe ingresar un valor!!");
        return;
    }
    controlarRespuesta(respuesta.value.toLowerCase());
});

function cargarPregunta() {
    // Verifica si todas las preguntas han sido respondidas
    if (estadoPreguntas.every(status => status === 1)) {
        clearInterval(countdown);
        mostrarPantallaFinal();
        return;
    }

    // Seleccionar letra actual
    do {
        numPreguntaActual++;
        if (numPreguntaActual >= TOTAL_PREGUNTAS) {
            numPreguntaActual = 0; // Reinicia si llega al final
        }
    } while (estadoPreguntas[numPreguntaActual] === 1); // Encuentra una pregunta no respondida

    const letraActual = String.fromCharCode(numPreguntaActual + 65); // Convertir a letra

    // Verificar si ya hay una pregunta seleccionada para esta letra
    if (!preguntasActuales[letraActual]) {
        // Si no hay, seleccionar una pregunta aleatoria
        const preguntas = bd_juego[letraActual];
        const preguntaAleatoria = preguntas[Math.floor(Math.random() * preguntas.length)];
        preguntasActuales[letraActual] = preguntaAleatoria; // Almacenar la pregunta seleccionada
    }

    // Mostrar la pregunta almacenada
    const preguntaActual = preguntasActuales[letraActual];
    document.getElementById("letra-pregunta").textContent = letraActual;
    document.getElementById("pregunta").textContent = preguntaActual.pregunta;
    document.getElementById(letraActual).classList.add("pregunta-actual");
}

function controlarRespuesta(txtRespuesta) {
    const letraActual = String.fromCharCode(numPreguntaActual + 65); // Convertir a letra
    const preguntaActual = preguntasActuales[letraActual];

    // Normalizar las respuestas
    const respuestaCorrecta = preguntaActual.respuesta.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    const respuestaUsuario = txtRespuesta.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    if (respuestaUsuario === respuestaCorrecta) {
        cantidadAcertadas++;
        estadoPreguntas[numPreguntaActual] = 1; // Marcar como respondida
        document.getElementById(letraActual).classList.remove("pregunta-actual");
        document.getElementById(letraActual).classList.add("bien-respondida");
    } else {
        estadoPreguntas[numPreguntaActual] = 1; // Marcar como respondida
        document.getElementById(letraActual).classList.remove("pregunta-actual");
        document.getElementById(letraActual).classList.add("mal-respondida");
    }

    respuesta.value = "";
    cargarPregunta();
}

function pasarPregunta() {
    const letraActual = String.fromCharCode(numPreguntaActual + 65); // Convertir a letra
    document.getElementById(letraActual).classList.remove("pregunta-actual");
    cargarPregunta();
}

// Funciones del cronómetro
function largarTiempo() {
    countdown = setInterval(() => {
        timeLeft--;
        timer.innerText = timeLeft;

        // Cambiar color del cronómetro según el tiempo restante
        if (timeLeft <= 10) {
            timer.style.color = 'red'; // Cambiar a rojo cuando quedan 10 segundos o menos
            timer.classList.add('vibrar'); // Agrega vibración

            // Vibrar si el dispositivo lo permite
            if (navigator.vibrate) {
                navigator.vibrate(500); // Vibrar durante 500ms
            }

            // Reproducir música de poco tiempo
            if (musicaPocoTiempo.paused) {
                musicaPocoTiempo.currentTime = 0; // Reiniciar la música
                musicaPocoTiempo.play().catch(error => {
                    console.error("Error al intentar reproducir la música de poco tiempo:", error);
                });
            }

            // Pausar la música de fondo
            if (!musicaJuego.paused) {
                musicaJuego.pause();
            }
        } else if (timeLeft <= 30) {
            timer.style.color = 'orange'; // Cambiar a naranja cuando quedan 30 segundos o menos
            timer.classList.remove('vibrar'); // Quita vibración
        } else {
            timer.style.color = '#9400D3'; // Color original
            timer.classList.remove('vibrar'); // Quita vibración
        }

        if (timeLeft < 0) {
            clearInterval(countdown);
            mostrarPantallaFinal();
        }
    }, 1000);
}

function mostrarPantallaFinal() {
    document.getElementById("acertadas").textContent = cantidadAcertadas;
    document.getElementById("score").textContent = (cantidadAcertadas * 100) / TOTAL_PREGUNTAS + "% de acierto";
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
}

function reiniciarJuego() {
    numPreguntaActual = -1;
    timeLeft = TIEMPO_DEL_JUEGO;
    timer.innerText = timeLeft;
    cantidadAcertadas = 0;
    estadoPreguntas.fill(0);
    preguntasActuales = {}; // Reiniciar las preguntas actuales

    // Quito las clases de los círculos
    const circulos = document.getElementsByClassName("circle");
    for (let i = 0; i < circulos.length; i++) {
        circulos[i].classList.remove("bien-respondida");
        circulos[i].classList.remove("mal-respondida");
        circulos[i].classList.remove("pregunta-actual");
    }

    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";

    // Reiniciar la música del juego
    musicaJuego.currentTime = 0; // Reiniciar la música
    musicaJuego.play().catch(error => {
        console.error("Error al intentar reproducir la música del juego:", error);
    });

    // Pausar la música de poco tiempo
    if (!musicaPocoTiempo.paused) {
        musicaPocoTiempo.pause();
    }




    largarTiempo();
    cargarPregunta();
}

