import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Events = () => {
  return (
    <div className="grid gap-4">
      <Card>
        <CardHeader>
          <CardTitle>События</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Просмотр и управление событиями</p>
          <p>Количество событий: 0</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Events;