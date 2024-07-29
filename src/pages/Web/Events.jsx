



import { Link } from 'react-router-dom';

const imageData = [
  {
    url: "https://www.table-art.co.uk/wp-content/uploads/2018/04/1136px-x-675px-peachy-image.jpg",
    text: "Birthday",
    route: "/eventbook", // Update with the appropriate route
  },
  {
    url: "https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg",
    text: "Wedding",
    route: "/eventbook", // Update with the appropriate route
  },
  {
    url: "https://media.licdn.com/dms/image/D4D12AQFxuo8CWk6qIg/article-cover_image-shrink_720_1280/0/1681980612057?e=2147483647&v=beta&t=3UqUyScRpe57OfnfM_R1IiYRfooYgHhNCKykNPGVYeI",
    text: "Conference",
    route: "/eventbook", // Update with the appropriate route
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcL1RLFEzrUEfUgu7xkLMtKJsIrya6fzoQ8ELWKvOZoK7gIzSnam3fq3W1QhYJ0OdiT1s&usqp=CAU",
    text: "Party",
    route: "/eventbook", // Update with the appropriate route
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk8BowtVVFfWUn52DjJyDtMd1-RgKMufS_6Q&usqp=CAU",
    text: "DJ",
    route: "/eventbook", // Update with the appropriate route
  },
];

function Events() {
  return (
    <div className="relative flex justify-center items-center h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black overflow-hidden">
      <style>
        {`
          @keyframes zoomInRotate {
            0% {
              transform: scale(0.8) rotate(0deg) translateY(30px);
              opacity: 0;
            }
            50% {
              transform: scale(1.1) rotate(3deg) translateY(-10px);
              opacity: 0.5;
            }
            100% {
              transform: scale(1) rotate(0deg) translateY(0px);
              opacity: 1;
            }
          }
          .zoom-rotate-animation {
            animation: zoomInRotate 1s ease-in-out;
          }
        `}
      </style>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gray-400 opacity-10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-gray-600 opacity-10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gray-800 opacity-10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      </div>
      <div className="relative flex gap-4 perspective-1000">
        {imageData.map((item, index) => (
          <div
            key={index}
            className="relative w-52 h-72 bg-cover bg-center cursor-pointer transition-transform duration-500 flex justify-center items-center zoom-rotate-animation"
            style={{ backgroundImage: `url(${item.url})` }}
          >
            <Link
              to={item.route} // Dynamic route based on event type
              className="absolute bottom-2.5 left-1/2 transform -translate-x-1/2 bg-transparent text-white text-xl font-bold px-4 py-2 rounded-md hover:bg-white hover:text-gray-800 transition-colors duration-300"
            >
              {item.text}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;

