import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { cn } from "@/lib/utils"

interface Resolution {
  x: number;
  y: number;
}

interface ImageProps {
  id: number;
  src: string;
  resolution: Resolution;
}

export function CardImage({
  id,
  src,
  resolution: { x, y } = { x: 0, y: 0 }
}: ImageProps) {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
  return (
    <Card className="overflow-hidden pt-0">
      <div className="relative">
        {!isImageLoaded &&
          <div className="animate-pulse bg-muted absolute inset-0" 
          style={{ aspectRatio: x / y }} ></div>
        }
        <img
          src={src}
          alt={`Image ${id}`}
          className={cn(
            "w-full h-auto object-cover transition-all duration-700",
            !isImageLoaded ?
              "opacity-0 blur-lg scale-105" :
              "opacity-100 blur-none scale-100"
          )}
          loading="lazy"
          style={{ aspectRatio: x / y }}
          onLoad={() => setIsImageLoaded(true)}
        />


        <Badge className="absolute top-3 right-3">
          Featured
        </Badge>
      </div>

      <CardHeader>
        <CardTitle>Image {id}</CardTitle>

        <CardDescription>
          A practical talk on component APIs,
          accessibility, and shipping faster.
        </CardDescription>
      </CardHeader>

      <CardFooter>
        <Button className="w-full">
          View Event
        </Button>
      </CardFooter>
    </Card>
  );
}