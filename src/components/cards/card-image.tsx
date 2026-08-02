import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ImageProps {
  id: number;
  src: string;
}

export function CardImage({ id, src }: ImageProps) {
  return (
    <Card className="overflow-hidden pt-0">
      <div className="relative">
        <img
          src={src}
          alt={`Image ${id}`}
          className="w-full h-auto object-cover"
          loading="lazy"
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