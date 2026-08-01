import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { CardImage } from "@/components/cards/card-image";
import "./App.css";

interface ImageData {
  id: number;
  src: string;
}

function App() {
  const [data, setData] = useState<ImageData[]>([]);

  useEffect(() => {
    fetch("/data/barber_mock_data.json")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <>
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold">Catálogo</h1>
        <p className="text-muted-foreground">
          Selecciona cualquiera de los cortes de pelo
        </p>
      </header>

      <main className="mx-auto max-w-7xl px-4">
        <ResponsiveMasonry
          columnsCountBreakPoints={{
            350: 1,
            640: 2,
            768: 3,
            1024: 4,
            1440: 5,
          }}
        >
          <Masonry gutter="24px">
            {data.map((image) => (
              <CardImage
                key={image.id}
                id={image.id}
                src={image.src}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </main>
    </>
  );
}

export default App;