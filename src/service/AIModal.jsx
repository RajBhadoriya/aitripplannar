/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

import { GoogleGenerativeAI } from "@google/generative-ai";


  
  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

    export const chatSession = model.startChat({
      generationConfig,

      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing,rating, Time t travel each of the location for 3 days with each day plan with best time to visit in JSON format."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"hotelOptions\": [\n    {\n      \"hotelName\": \"The D Las Vegas\",\n      \"hotelAddress\": \"301 Fremont Street, Las Vegas, NV 89101\",\n      \"price\": \"$50-$100 per night\",\n      \"hotelImageUrl\": \"https://www.thed.com/assets/images/hotel-exterior.jpg\",\n      \"geoCoordinates\": \"36.1699° N, 115.1421° W\",\n      \"rating\": 4.0,\n      \"description\": \"A budget-friendly hotel located in the heart of Fremont Street Experience, offering a casino, restaurants, and nightlife options.\"\n    },\n    {\n      \"hotelName\": \"Plaza Hotel & Casino\",\n      \"hotelAddress\": \"1 Main Street, Las Vegas, NV 89101\",\n      \"price\": \"$60-$120 per night\",\n      \"hotelImageUrl\": \"https://www.plazahotelcasino.com/media/images/hero-images/hero-plaza-hotel-casino.jpg\",\n      \"geoCoordinates\": \"36.1698° N, 115.1426° W\",\n      \"rating\": 4.5,\n      \"description\": \"A historic hotel with a vibrant casino, a variety of dining options, and a rooftop pool with views of the Strip.\"\n    },\n    {\n      \"hotelName\": \"Golden Nugget Las Vegas\",\n      \"hotelAddress\": \"129 E Fremont Street, Las Vegas, NV 89101\",\n      \"price\": \"$70-$150 per night\",\n      \"hotelImageUrl\": \"https://www.goldennugget.com/media/2686/golden-nugget-las-vegas-exterior.jpg\",\n      \"geoCoordinates\": \"36.1697° N, 115.1405° W\",\n      \"rating\": 4.0,\n      \"description\": \"A luxurious hotel known for its famous shark tank and a variety of restaurants, bars, and entertainment.\"\n    }\n  ],\n  \"itinerary\": [\n    {\n      \"day\": 1,\n      \"theme\": \"Exploring Downtown & Fremont Street\",\n      \"plan\": [\n        {\n          \"placeName\": \"Fremont Street Experience\",\n          \"placeDetails\": \"A pedestrian mall with a canopy of lights, live music, street performers, and casinos.\",\n          \"placeImageUrl\": \"https://www.visitlasvegas.com/media/images/featured-images/las-vegas-strip-night.jpg\",\n          \"geoCoordinates\": \"36.1699° N, 115.1421° W\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"timeToTravel\": \"2 hours\"\n        },\n        {\n          \"placeName\": \"Neon Museum\",\n          \"placeDetails\": \"A museum showcasing vintage neon signs from Las Vegas' past.\",\n          \"placeImageUrl\": \"https://www.neonmuseum.org/images/slideshow-images/17.jpg\",\n          \"geoCoordinates\": \"36.1643° N, 115.1401° W\",\n          \"ticketPricing\": \"$25\",\n          \"rating\": 4.0,\n          \"timeToTravel\": \"1 hour\"\n        },\n        {\n          \"placeName\": \"Pinball Hall of Fame\",\n          \"placeDetails\": \"A museum dedicated to pinball machines from all eras.\",\n          \"placeImageUrl\": \"https://pinballhalloffame.org/images/gallery/main-level.jpg\",\n          \"geoCoordinates\": \"36.1697° N, 115.1395° W\",\n          \"ticketPricing\": \"$15\",\n          \"rating\": 4.0,\n          \"timeToTravel\": \"1 hour\"\n        }\n      ],\n      \"bestTime\": \"Evening\"\n    },\n    {\n      \"day\": 2,\n      \"theme\": \"Free Activities & Local Flavors\",\n      \"plan\": [\n        {\n          \"placeName\": \"Las Vegas Strip\",\n          \"placeDetails\": \"Walking along the Strip, admiring the lights and architecture of famous hotels.\",\n          \"placeImageUrl\": \"https://www.visitlasvegas.com/media/images/featured-images/las-vegas-strip-night.jpg\",\n          \"geoCoordinates\": \"36.1020° N, 115.1724° W\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 5.0,\n          \"timeToTravel\": \"2 hours\"\n        },\n        {\n          \"placeName\": \"Bellagio Conservatory & Botanical Garden\",\n          \"placeDetails\": \"A stunning display of flowers, plants, and artistic installations.\",\n          \"placeImageUrl\": \"https://www.bellagio.com/content/dam/mgmresorts/bellagio/images/conservatory-and-botanical-garden/conservatory-garden-hero.jpg\",\n          \"geoCoordinates\": \"36.1108° N, 115.1726° W\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"timeToTravel\": \"1 hour\"\n        },\n        {\n          \"placeName\": \"The LINQ Promenade\",\n          \"placeDetails\": \"A vibrant outdoor shopping and dining destination with the High Roller observation wheel.\",\n          \"placeImageUrl\": \"https://www.caesars.com/linq/media/images/linq-promenade-hero.jpg\",\n          \"geoCoordinates\": \"36.1020° N, 115.1724° W\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.0,\n          \"timeToTravel\": \"2 hours\"\n        }\n      ],\n      \"bestTime\": \"Afternoon\"\n    },\n    {\n      \"day\": 3,\n      \"theme\": \"Exploring History & Nature\",\n      \"plan\": [\n        {\n          \"placeName\": \"Hoover Dam\",\n          \"placeDetails\": \"A historical engineering marvel with guided tours and scenic views.\",\n          \"placeImageUrl\": \"https://www.nps.gov/hoov/learn/photosmultimedia/web-media-gallery.htm\",\n          \"geoCoordinates\": \"36.0047° N, 114.9923° W\",\n          \"ticketPricing\": \"$30\",\n          \"rating\": 4.5,\n          \"timeToTravel\": \"4 hours (including travel time)\"\n        },\n        {\n          \"placeName\": \"Red Rock Canyon National Conservation Area\",\n          \"placeDetails\": \"A scenic desert landscape with hiking trails, rock formations, and wildlife.\",\n          \"placeImageUrl\": \"https://www.blm.gov/visit/red-rock-canyon-national-conservation-area\",\n          \"geoCoordinates\": \"36.1333° N, 115.2705° W\",\n          \"ticketPricing\": \"$15 per vehicle\",\n          \"rating\": 4.0,\n          \"timeToTravel\": \"2 hours\"\n        }\n      ],\n      \"bestTime\": \"Morning\"\n    }\n  ]\n}\n```\n\n**Explanation:**\n\n* **hotelOptions:** This section provides information about three budget-friendly hotels in Las Vegas, including their names, addresses, prices, image URLs, coordinates, ratings, and descriptions.\n* **itinerary:** This section outlines a 3-day itinerary for a couple in Las Vegas, with each day focused on a different theme.\n* **Day 1 (Exploring Downtown & Fremont Street):** This day focuses on exploring the historic downtown area, including the vibrant Fremont Street Experience, the Neon Museum, and the Pinball Hall of Fame.\n* **Day 2 (Free Activities & Local Flavors):** This day involves free activities like walking the Las Vegas Strip, exploring the Bellagio Conservatory, and enjoying the LINQ Promenade.\n* **Day 3 (Exploring History & Nature):** This day offers an opportunity to experience the historical Hoover Dam and the natural beauty of Red Rock Canyon.\n* **Best Time:** This section suggests the ideal time of day to visit each location based on the experience. \n\nThis plan provides a balanced combination of attractions, activities, and budget-friendly options for a fun and memorable trip to Las Vegas. \n"},
          ],
        },
      ],
    });
  
   
