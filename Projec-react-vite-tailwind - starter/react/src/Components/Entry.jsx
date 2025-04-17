import Mark from "../assets/mark.png";

export function Entry(props) {
  return (
    <div className="flex bg-gradient-to-b w-2xl from-white to-gray-600 rounded-2xl font-[inter] ">
      <img src={props.img} className="w-40 h-60 object-cover rounded-2xl" />

      <div className="flex flex-col p-4 gap-2">
        <div className="flex gap-2 items-center justify-start ">
          <img src={Mark} alt="" />
          <span className="text-blue-500 font-bold">{props.country}</span>
          <a
            href={props.maps}
            target="_blank"
            className="text-blue-500/70 font-bold"
          >
            View in Google Maps
          </a>
        </div>
        <h1 className="text-4xl text-black font-bold">{props.title}</h1>
        <p className="text-black font-bold">{props.date}</p>
        <p className="text-black">{props.description}</p>
      </div>
    </div>
  );
}
