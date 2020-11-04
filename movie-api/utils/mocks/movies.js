const moviesMock = [
  {
    id: '5e6cca85-b386-41b8-87e8-e62d13b65061',
    title: 'The Nativity',
    year: 2003,
    cover: 'http://dummyimage.com/188x140.bmp/ff4444/ffffff',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    duration: 1982,
    contentRating: 'PG-13',
    source:
      'http://statcounter.com/ut.js?aliquam=eget&augue=rutrum&quam=at&sollicitudin=lorem&vitae=integer&consectetuer=tincidunt&eget=ante&rutrum=vel&at=ipsum&lorem=praesent&integer=blandit&tincidunt=lacinia&ante=erat&vel=vestibulum&ipsum=sed&praesent=magna&blandit=at&lacinia=nunc&erat=commodo&vestibulum=placerat&sed=praesent&magna=blandit&at=nam&nunc=nulla&commodo=integer&placerat=pede&praesent=justo&blandit=lacinia&nam=eget&nulla=tincidunt&integer=eget&pede=tempus&justo=vel&lacinia=pede&eget=morbi&tincidunt=porttitor&eget=lorem&tempus=id&vel=ligula',
    tags: [
      'Adventure|Children|Comedy|Fantasy|Mystery',
      'Drama',
      'Action|Crime|Mystery',
      'Action|Animation|Comedy|Crime|Drama|Mystery|Romance|Thriller',
    ],
  },
  {
    id: '7ad42d67-7dd1-499e-92ea-1fa3546c8509',
    title: 'Tale of Tales (Skazka skazok)',
    year: 2003,
    cover: 'http://dummyimage.com/171x162.png/ff4444/ffffff',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    duration: 1942,
    contentRating: 'PG-13',
    source:
      'http://themeforest.net/vestibulum.html?maecenas=posuere&tristique=cubilia&est=curae&et=nulla&tempus=dapibus&semper=dolor&est=vel&quam=est&pharetra=donec&magna=odio&ac=justo&consequat=sollicitudin&metus=ut&sapien=suscipit&ut=a&nunc=feugiat&vestibulum=et&ante=eros&ipsum=vestibulum&primis=ac&in=est&faucibus=lacinia&orci=nisi&luctus=venenatis&et=tristique&ultrices=fusce&posuere=congue&cubilia=diam&curae=id&mauris=ornare&viverra=imperdiet&diam=sapien&vitae=urna&quam=pretium&suspendisse=nisl&potenti=ut&nullam=volutpat&porttitor=sapien&lacus=arcu&at=sed&turpis=augue&donec=aliquam&posuere=erat&metus=volutpat&vitae=in',
    tags: ['Comedy', 'Horror|Mystery|Thriller', 'Action|Adventure'],
  },
  {
    id: 'f129a260-b22a-4a86-9cb7-cd778faac7a3',
    title: 'Dimensions of Dialogue (Moznosti dialogu)',
    year: 2006,
    cover: 'http://dummyimage.com/195x125.jpg/cc0000/ffffff',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    duration: 2057,
    contentRating: 'PG-13',
    source:
      'https://reverbnation.com/ante/ipsum/primis.xml?suspendisse=sapien&potenti=urna&cras=pretium&in=nisl&purus=ut&eu=volutpat&magna=sapien&vulputate=arcu&luctus=sed&cum=augue&sociis=aliquam&natoque=erat&penatibus=volutpat&et=in&magnis=congue&dis=etiam&parturient=justo&montes=etiam&nascetur=pretium&ridiculus=iaculis&mus=justo&vivamus=in&vestibulum=hac&sagittis=habitasse&sapien=platea&cum=dictumst&sociis=etiam&natoque=faucibus&penatibus=cursus&et=urna&magnis=ut&dis=tellus&parturient=nulla&montes=ut&nascetur=erat&ridiculus=id&mus=mauris&etiam=vulputate&vel=elementum&augue=nullam&vestibulum=varius&rutrum=nulla&rutrum=facilisi&neque=cras&aenean=non&auctor=velit&gravida=nec&sem=nisi&praesent=vulputate&id=nonummy&massa=maecenas&id=tincidunt&nisl=lacus&venenatis=at&lacinia=velit&aenean=vivamus&sit=vel&amet=nulla&justo=eget&morbi=eros&ut=elementum&odio=pellentesque&cras=quisque&mi=porta&pede=volutpat&malesuada=erat&in=quisque&imperdiet=erat&et=eros&commodo=viverra&vulputate=eget&justo=congue&in=eget&blandit=semper&ultrices=rutrum&enim=nulla&lorem=nunc&ipsum=purus&dolor=phasellus&sit=in&amet=felis&consectetuer=donec&adipiscing=semper&elit=sapien&proin=a&interdum=libero&mauris=nam&non=dui&ligula=proin&pellentesque=leo&ultrices=odio&phasellus=porttitor&id=id&sapien=consequat',
    tags: [
      'Action|Adventure|Animation|Crime|Fantasy',
      'Fantasy|Horror',
      'Comedy|Drama',
      'Comedy|Drama',
      'Action|Drama',
    ],
  },
  {
    id: '9d1abb28-7661-45d1-9029-619559903da2',
    title: "I'm King Kong!: The Exploits of Merian C. Cooper ",
    year: 2005,
    cover: 'http://dummyimage.com/193x213.png/cc0000/ffffff',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    duration: 1937,
    contentRating: 'PG',
    source:
      'https://parallels.com/venenatis/lacinia/aenean/sit.jsp?lacus=elit&at=proin&velit=interdum&vivamus=mauris&vel=non&nulla=ligula&eget=pellentesque&eros=ultrices&elementum=phasellus&pellentesque=id&quisque=sapien&porta=in&volutpat=sapien&erat=iaculis&quisque=congue&erat=vivamus&eros=metus&viverra=arcu&eget=adipiscing&congue=molestie&eget=hendrerit&semper=at&rutrum=vulputate&nulla=vitae&nunc=nisl&purus=aenean&phasellus=lectus&in=pellentesque&felis=eget&donec=nunc&semper=donec&sapien=quis&a=orci&libero=eget&nam=orci&dui=vehicula&proin=condimentum&leo=curabitur&odio=in&porttitor=libero&id=ut&consequat=massa&in=volutpat&consequat=convallis&ut=morbi&nulla=odio&sed=odio&accumsan=elementum&felis=eu&ut=interdum&at=eu&dolor=tincidunt&quis=in&odio=leo&consequat=maecenas&varius=pulvinar&integer=lobortis&ac=est&leo=phasellus&pellentesque=sit&ultrices=amet&mattis=erat&odio=nulla&donec=tempus&vitae=vivamus&nisi=in&nam=felis&ultrices=eu&libero=sapien&non=cursus&mattis=vestibulum&pulvinar=proin&nulla=eu',
    tags: [
      'Action|Adventure|Animation|Fantasy|Sci-Fi',
      'Action|Drama|War',
      'Drama|War',
      'Crime|Film-Noir',
    ],
  },
  {
    id: '3860117e-d2d6-4f84-a85f-5183f0f3d6c8',
    title: 'Waiting to Exhale',
    year: 2000,
    cover: 'http://dummyimage.com/200x178.jpg/5fa2dd/ffffff',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    duration: 1889,
    contentRating: 'NC-17',
    source:
      'http://github.io/pede/venenatis/non/sodales/sed/tincidunt.json?quis=in&turpis=quis&sed=justo&ante=maecenas&vivamus=rhoncus&tortor=aliquam&duis=lacus&mattis=morbi&egestas=quis&metus=tortor&aenean=id&fermentum=nulla&donec=ultrices&ut=aliquet&mauris=maecenas&eget=leo&massa=odio&tempor=condimentum&convallis=id&nulla=luctus&neque=nec&libero=molestie&convallis=sed&eget=justo&eleifend=pellentesque&luctus=viverra&ultricies=pede&eu=ac&nibh=diam&quisque=cras&id=pellentesque&justo=volutpat&sit=dui&amet=maecenas&sapien=tristique&dignissim=est&vestibulum=et&vestibulum=tempus&ante=semper&ipsum=est&primis=quam&in=pharetra&faucibus=magna&orci=ac&luctus=consequat&et=metus',
    tags: ['Comedy|Romance'],
  },
  {
    id: '42a38a7b-eb88-4654-8f13-3290a87f5d5b',
    title: 'Beauty and the Beast (Beauty and the Beasts: A Dark Tale)',
    year: 1995,
    cover: 'http://dummyimage.com/103x182.png/5fa2dd/ffffff',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    duration: 2051,
    contentRating: 'PG-13',
    source:
      'http://unblog.fr/quam/turpis/adipiscing/lorem/vitae.js?sit=massa&amet=donec&sem=dapibus&fusce=duis&consequat=at&nulla=velit&nisl=eu&nunc=est&nisl=congue&duis=elementum&bibendum=in&felis=hac&sed=habitasse&interdum=platea&venenatis=dictumst&turpis=morbi&enim=vestibulum&blandit=velit&mi=id&in=pretium&porttitor=iaculis&pede=diam&justo=erat&eu=fermentum&massa=justo&donec=nec&dapibus=condimentum&duis=neque&at=sapien&velit=placerat&eu=ante&est=nulla&congue=justo&elementum=aliquam&in=quis&hac=turpis&habitasse=eget&platea=elit&dictumst=sodales&morbi=scelerisque&vestibulum=mauris&velit=sit&id=amet&pretium=eros&iaculis=suspendisse',
    tags: ['Comedy|Documentary', 'Action|Horror', 'Documentary'],
  },
  {
    id: '7a39fff8-9573-4c90-9f43-4c7df0d2f1c4',
    title: 'Situation, The',
    year: 1998,
    cover: 'http://dummyimage.com/112x133.jpg/ff4444/ffffff',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    duration: 2053,
    contentRating: 'PG-13',
    source:
      'https://wsj.com/luctus.html?id=congue&nisl=diam&venenatis=id&lacinia=ornare&aenean=imperdiet&sit=sapien&amet=urna&justo=pretium&morbi=nisl&ut=ut&odio=volutpat&cras=sapien&mi=arcu&pede=sed&malesuada=augue&in=aliquam&imperdiet=erat&et=volutpat&commodo=in&vulputate=congue&justo=etiam&in=justo&blandit=etiam&ultrices=pretium&enim=iaculis&lorem=justo',
    tags: ['Western'],
  },
  {
    id: '65409353-c331-478a-aefa-6b843f2765c3',
    title: 'Primus Hallucino-Genetics Live 2004',
    year: 2009,
    cover: 'http://dummyimage.com/198x127.bmp/dddddd/000000',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    duration: 1908,
    contentRating: 'NC-17',
    source:
      'http://squarespace.com/metus/arcu.jpg?aliquet=eget&pulvinar=elit&sed=sodales&nisl=scelerisque&nunc=mauris&rhoncus=sit&dui=amet&vel=eros&sem=suspendisse&sed=accumsan&sagittis=tortor&nam=quis&congue=turpis&risus=sed&semper=ante&porta=vivamus&volutpat=tortor&quam=duis&pede=mattis&lobortis=egestas&ligula=metus&sit=aenean&amet=fermentum&eleifend=donec&pede=ut&libero=mauris&quis=eget&orci=massa&nullam=tempor&molestie=convallis&nibh=nulla&in=neque&lectus=libero&pellentesque=convallis&at=eget&nulla=eleifend&suspendisse=luctus&potenti=ultricies&cras=eu&in=nibh&purus=quisque&eu=id&magna=justo&vulputate=sit&luctus=amet&cum=sapien&sociis=dignissim&natoque=vestibulum&penatibus=vestibulum&et=ante&magnis=ipsum&dis=primis&parturient=in&montes=faucibus&nascetur=orci&ridiculus=luctus',
    tags: ['Comedy|Drama|Romance', 'Drama|Thriller'],
  },
  {
    id: 'd8c199d5-25cc-4295-88a8-340f91cae071',
    title:
      "Where Is the Friend's Home? (Where Is My Friend's House?) (Khane-ye doust kodjast?)",
    year: 2001,
    cover: 'http://dummyimage.com/219x169.png/cc0000/ffffff',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    duration: 1973,
    contentRating: 'PG-13',
    source:
      'https://myspace.com/lacinia/nisi/venenatis.png?id=libero&pretium=rutrum&iaculis=ac',
    tags: ['Crime|Drama', 'Comedy|Horror'],
  },
  {
    id: 'ffdcad9c-053e-45ff-a887-d4fa7364f934',
    title: 'Cruel Story of Youth (Seishun zankoku monogatari)',
    year: 1990,
    cover: 'http://dummyimage.com/183x110.png/cc0000/ffffff',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    duration: 2019,
    contentRating: 'G',
    source:
      'https://globo.com/velit/donec/diam/neque.aspx?donec=eu&quis=mi&orci=nulla&eget=ac&orci=enim&vehicula=in&condimentum=tempor&curabitur=turpis&in=nec&libero=euismod&ut=scelerisque&massa=quam&volutpat=turpis&convallis=adipiscing&morbi=lorem&odio=vitae&odio=mattis&elementum=nibh&eu=ligula&interdum=nec&eu=sem&tincidunt=duis&in=aliquam',
    tags: ['Horror|Mystery|Thriller', 'Action|Crime|Thriller'],
  },
  {
    id: '04ab038b-28d2-4e02-877f-f38c8b942c7c',
    title: 'Protector, The (a.k.a. Warrior King) (Tom yum goong)',
    year: 1999,
    cover: 'http://dummyimage.com/170x116.jpg/dddddd/000000',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    duration: 2008,
    contentRating: 'R',
    source:
      'http://cdbaby.com/eget.jsp?quam=id&sapien=justo&varius=sit&ut=amet&blandit=sapien&non=dignissim&interdum=vestibulum&in=vestibulum&ante=ante&vestibulum=ipsum&ante=primis&ipsum=in&primis=faucibus&in=orci&faucibus=luctus&orci=et&luctus=ultrices&et=posuere&ultrices=cubilia&posuere=curae&cubilia=nulla&curae=dapibus&duis=dolor&faucibus=vel&accumsan=est&odio=donec&curabitur=odio&convallis=justo&duis=sollicitudin&consequat=ut&dui=suscipit&nec=a&nisi=feugiat&volutpat=et&eleifend=eros&donec=vestibulum&ut=ac&dolor=est&morbi=lacinia',
    tags: [
      'Documentary',
      'Adventure|Children|Sci-Fi',
      'Comedy|Drama|Romance',
      'Animation|Drama',
      'Comedy',
    ],
  },
  {
    id: 'f67cfc09-7462-4908-b0c4-cbe471bae153',
    title: 'Georgy Girl',
    year: 1998,
    cover: 'http://dummyimage.com/210x204.bmp/5fa2dd/ffffff',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    duration: 1968,
    contentRating: 'NC-17',
    source:
      'https://admin.ch/magna/vestibulum/aliquet/ultrices/erat.jsp?consequat=pede&ut=libero&nulla=quis&sed=orci&accumsan=nullam&felis=molestie&ut=nibh&at=in&dolor=lectus&quis=pellentesque&odio=at&consequat=nulla&varius=suspendisse&integer=potenti&ac=cras&leo=in&pellentesque=purus&ultrices=eu&mattis=magna',
    tags: ['Action|Thriller', 'Adventure|Children', 'Comedy|Drama'],
  },
  {
    id: 'be3fa8e2-8773-45e2-9193-0a24228f06c0',
    title: 'Down to Earth',
    year: 1989,
    cover: 'http://dummyimage.com/175x161.png/cc0000/ffffff',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    duration: 1934,
    contentRating: 'R',
    source:
      'https://stumbleupon.com/diam/erat.aspx?lobortis=accumsan&sapien=tellus&sapien=nisi&non=eu&mi=orci&integer=mauris&ac=lacinia&neque=sapien&duis=quis&bibendum=libero&morbi=nullam&non=sit&quam=amet&nec=turpis&dui=elementum&luctus=ligula&rutrum=vehicula&nulla=consequat&tellus=morbi&in=a&sagittis=ipsum&dui=integer&vel=a&nisl=nibh&duis=in&ac=quis&nibh=justo&fusce=maecenas&lacus=rhoncus&purus=aliquam&aliquet=lacus&at=morbi&feugiat=quis&non=tortor&pretium=id&quis=nulla&lectus=ultrices&suspendisse=aliquet&potenti=maecenas&in=leo&eleifend=odio&quam=condimentum&a=id&odio=luctus&in=nec&hac=molestie&habitasse=sed&platea=justo&dictumst=pellentesque&maecenas=viverra&ut=pede&massa=ac&quis=diam&augue=cras&luctus=pellentesque&tincidunt=volutpat&nulla=dui&mollis=maecenas&molestie=tristique&lorem=est&quisque=et&ut=tempus&erat=semper',
    tags: [
      'Action|Sci-Fi',
      'Documentary',
      'Drama|War',
      'Adventure|Comedy',
      'Adventure',
    ],
  },
  {
    id: '150c585f-8c38-4d8a-b400-00a5bd9f6fcc',
    title: 'Shake It (En kort en lang)',
    year: 2003,
    cover: 'http://dummyimage.com/249x228.bmp/dddddd/000000',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    duration: 1899,
    contentRating: 'R',
    source:
      'http://flickr.com/facilisi/cras/non/velit/nec/nisi.aspx?morbi=enim&ut=blandit&odio=mi&cras=in&mi=porttitor&pede=pede&malesuada=justo&in=eu&imperdiet=massa&et=donec&commodo=dapibus',
    tags: ['Drama|War'],
  },
  {
    id: '0460f12a-825b-48df-acd7-343b9db4ca84',
    title: 'Star Trek: Insurrection',
    year: 2012,
    cover: 'http://dummyimage.com/179x230.png/dddddd/000000',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    duration: 2031,
    contentRating: 'G',
    source:
      'http://pinterest.com/et/magnis/dis.jsp?odio=amet&justo=cursus&sollicitudin=id&ut=turpis&suscipit=integer&a=aliquet&feugiat=massa&et=id&eros=lobortis&vestibulum=convallis&ac=tortor&est=risus&lacinia=dapibus&nisi=augue&venenatis=vel&tristique=accumsan&fusce=tellus&congue=nisi&diam=eu&id=orci&ornare=mauris&imperdiet=lacinia&sapien=sapien&urna=quis',
    tags: ['Animation|Children', 'Comedy|Drama'],
  },
];

function filteredMoviesMock(tag) {
  return moviesMock.filter((movie) => movie.tags.includes(tag));
}

class MoviesServiceMock {
  async getMovies() {
    return Promise.resolve(moviesMock);
  }

  async createMovie() {
    return Promise.resolve(moviesMock[0]);
  }
}

module.exports = {
  moviesMock,
  filteredMoviesMock,
  MoviesServiceMock,
};
