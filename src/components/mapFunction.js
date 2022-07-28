import React from "react";
import DisplayItems from "./displayItems";
const CityList = () => {
//   const names = [
//     "Pokhara",
//     "Chitwan",
//     "Hetauda",
//     "Kathmandu",
//     "Lalitpur",
//     "Bhaktapur",
//   ];

const cities = [
    {
      "id":1,
      "name": "Pokhara",
      "image":"https://upload.wikimedia.org/wikipedia/commons/6/61/Pokhara-valley-nepal.jpg",
      "date":"2021-12-12",
      "detail": "Pokhara is a city on Phewa Lake, in central Nepal. It’s known as a gateway to the Annapurna Circuit, a popular trail in the Himalayas. Tal Barahi Temple, a 2-story pagoda, sits on an island in the lake. On the eastern shore, the Lakeside district has yoga centers and restaurants. In the city’s south, the International Mountain Museum has exhibits on the history of mountaineering and the people of the Himalayas."
    },
    {
      "id":2,
      "name": "Chitwan",
      "image":"https://uploads-ssl.webflow.com/576fd5a8f192527e50a4b95c/5c337a21121342bd3505299a_top%20things%20to%20do%20in%20Chitwan.jpg",
      "date":"2021-03-12",
      "detail": "Chitwan District is one of 77 districts of Nepal, and takes up the southwestern corner of Bagmati Province. Bharatpur, largest city of Nepal after Kathmandu, is its administrative centre. It covers 2,238.39 km², and in 2011 had a population of 579,984 people."
    },
    {
      "id":3,
      "name": "Hetauda",
      "image":"https://nepaltourismhub.com/illion-asset/uploads/2019/12/848-Beautiful-Hetauda-city1.jpg",
      "date":"2021-12-11",
      "detail": "Hetauda is a sub-metropolitan city in the Makwanpur District of Bagmati Province in central Nepal. It is the administrative headquarters of the Makwanpur District and the capital of Bagmati Province as declared by majority Provincial Assembly Members on 12 January 2020. It is one of the largest cities of Nepal."
    },
    {
      "id":4,
      "name": "Kathmandu",
      "image":"https://images.thrillophilia.com/image/upload/s--XmU0CINq--/c_fill,g_auto,h_600,q_auto,w_975/f_auto,fl_strip_profile/v1/images/photos/000/146/987/original/1595503023_shutterstock_266064224.jpg.jpg",
      "date":"2021-08-08",
      "detail": "Kathmandu, Nepal's capital, is set in a valley surrounded by the Himalayan mountains. At the heart of the old city’s mazelike alleys is Durbar Square, which becomes frenetic during Indra Jatra, a religious festival featuring masked dances. Many of the city's historic sites were damaged or destroyed by a 2015 earthquake. Durbar Square's palace, Hanuman Dhoka, and Kasthamandap, a wooden Hindu temple, are being rebuilt."
    },
    {
      "id":5,
      "name": "Lalitpur",
      "image":"https://cdn.britannica.com/36/154236-050-8127D19C/Durbar-Square-Lalitpur-Nepal.jpg",
      "date":"2021-04-23",
      "detail": "Lalitpur Metropolitan City, historically Patan, is the fourth most populous city of Nepal after Kathmandu, Pokhara and Bharatpur, and it is located in the south-central part of Kathmandu Valley, a new metropolitan city of Nepal. Lalitpur is also known as Manigal."
    },
    {
      "id":6,
      "name": "Bhaktapur",
      "image": "https://www.landnepal.com/wp-content/uploads/2021/08/bhaktapur.jpeg",
      "date":"2021-05-09",
      "detail": "Bhaktapur, known locally as Khwopa, is a city in the east corner of the Kathmandu Valley in Nepal located about 13 kilometres from the capital city, Kathmandu. In terms of area, Bhaktapur is the smallest city of Nepal."
    }
  ]

  // const cityList = cities.map((city) => <h2>{city.image} <br /> {city.name} <br /> {city.date}</h2>);
  const cityList = cities.map((i) => {
    return<DisplayItems i={i}  image={i.image} name={i.name} date={i.date}/>
    

  }
  )

    
  
  
  return <div>{cityList}</div>;
};
export default CityList;
