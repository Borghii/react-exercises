import { Entry } from "./Components/Entry";
import { Header } from "./Components/Header";

export function Page() {
  return (
    <>
      <div className="flex flex-col justify-around relative overflow-x-hidden items-center gap-10 p-2 pt-17 w-scren min-h-screen h-screen bg-amber-50">
        <Header />
        <Entry
          img="https://scrimba.com/links/travel-journal-japan-image-url"
          country="Japan"
          maps="https://www.google.com/maps/place/Monte+Fuji/@35.360625,138.7273634,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu&g_ep=EgoyMDI1MDQxNC4xIKXMDSoASAFQAw%3D%3D"
          title="Mount Fuji"
          date="12 Jan, 2023 - 24 Jan, 2023"
          description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
        />
        <Entry
          img="https://scrimba.com/links/travel-journal-australia-image-url"
          country="Australia"
          maps="https://www.google.com/maps/place/Sydney+Opera+House/@-33.8567844,151.213108,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12ae3e4b0b1f3b:0x8c7b0a1c8b1c4c0!8m2!3d-33.8567844!4d151.2152967!16zL20vMGNrczA?entry=ttu"
          title="Sydney Opera House"
          date="15 Feb, 2023 - 20 Feb, 2023"
          description="The Sydney Opera House is a multi-venue performing arts centre in Sydney. It is one of the 20th century's most famous and distinctive buildings."
        />
        <Entry
          img="https://scrimba.com/links/travel-journal-norway-image-url"
          country="Norway"
          maps="https://www.google.com/maps/place/Geirangerfjord/@62.104911,7.005004,12z/data=!3m1!4b1!4m6!3m5!1s0x4612e3b6b0b1f3b:0x8c7b0a1c8b1c4c0!8m2!3d62.104911!4d7.005004!16zL20vMGNrczA?entry=ttu"
          title="Geirangerfjord"
          date="01 Mar, 2023 - 10 Mar, 2023"
          description="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is a 15-kilometre-long branch off the Sunnylvsfjorden."
        />

        <Entry
          img="https://scrimba.com/links/travel-journal-japan-image-url"
          country="Japan"
          maps="https://www.google.com/maps/place/Monte+Fuji/@35.360625,138.7273634,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu&g_ep=EgoyMDI1MDQxNC4xIKXMDSoASAFQAw%3D%3D"
          title="Mount Fuji"
          date="12 Jan, 2023 - 24 Jan, 2023"
          description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
        />

        <Entry
          img="https://scrimba.com/links/travel-journal-norway-image-url"
          country="Norway"
          maps="https://www.google.com/maps/place/Geirangerfjord/@62.104911,7.005004,12z/data=!3m1!4b1!4m6!3m5!1s0x4612e3b6b0b1f3b:0x8c7b0a1c8b1c4c0!8m2!3d62.104911!4d7.005004!16zL20vMGNrczA?entry=ttu"
          title="Geirangerfjord"
          date="01 Mar, 2023 - 10 Mar, 2023"
          description="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is a 15-kilometre-long branch off the Sunnylvsfjorden."
        />
      </div>
    </>
  );
}
