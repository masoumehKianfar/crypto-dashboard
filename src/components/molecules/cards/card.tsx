import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shadcn/components/ui/card";

interface cardInfoProps {
  title: string;
  value: string;
}
const CardInfo = ({ title, value }: cardInfoProps) => {
  return (
    <Card className="border dark:shadow-inner dark:shadow-dark-gray-light/20 dark:bg-dark-gray-dark border-light-primary-light bg-light-gray-dark rounded-md h-full w-full lg:w-1/4">
      <CardHeader className="p-4">
        <CardTitle>
          <p className="mb-4 text-body dark:text-dark-gray-lighter/70">
            {title}
          </p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-title">{value}</p>
      </CardContent>
    </Card>
  );
};

export default CardInfo;
