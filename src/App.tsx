import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { CardImage } from "@/components/cards/card-image";
import "./App.css";
import { Spinner } from "./components/ui/spinner";

interface ImageData {
  id: number;
  src: string;
}

function App() {
  const [data, setData] = useState<ImageData[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    fetch("/data/barber_mock_data.json")
      .then((response) => {

        if (!response.ok) {
          throw new Error(`Failed to load the JSON file ${response.status}`)
        }

        return response.json();
      })
      .then(setData)
      .catch(err => {
        setErrorMessage(err.message);
        console.error('Error failed to loaded the JSON file', err)
      })
      .finally(() => {
        setLoading(false);
      });

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

        {
          isLoading ?
            <div className="flex flex-col items-center">
              <Spinner className="size-14" />
              <p>Cargando tu contenido....</p>
            </div>
            :
            errorMessage ?
              <div>
                {errorMessage}
              </div>
              :
              <ResponsiveMasonry
                columnsCountBreakPoints={{
                  350: 2,
                  640: 3,
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
        }

      </main>
    </>
  );
}

export default App;