interface dataParcour {
    id: string;
    urlImg: string;
    dest: string;
    ville: string;
  }

const dataParcour:dataParcour[] = [
    {
        id:"01",
        urlImg:"/assets/images/parcour/img-4.jpg",
        dest: "DESTINATION",
        ville: "Antananarivo"
    },
    {
        id:"02",
        urlImg:"/assets/images/parcour/img-7.jpg",
        dest: "DESTINATION",
        ville: "Antsiranana"
    },
    {
        id:"03",
        urlImg:"/assets/images/parcour/img-3.jpg",
        dest: "DESTINATION",
        ville: "Mahajanga"
    },
    {
        id:"04",
        urlImg:"/assets/images/parcour/img-5.jpg",
        dest: "DESTINATION",
        ville: "Toamasina"
    },
    {
        id:"05",
        urlImg:"/assets/images/parcour/img-2.jpg",
        dest: "DESTINATION",
        ville: "Fianarantsoa"
    },
    {
        id:"06",
        urlImg:"/assets/images/parcour/img-8.jpg",
        dest: "DESTINATION",
        ville: "Tulear"
    },
]
export default dataParcour;