import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
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
      <Card>
        <CardHeader>
          <CardTitle>Объекты</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Описание объектов</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Компании</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Описание компаний</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Персонал</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Описание персонала</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Системный журнал</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Описание системного журнала</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Справочники</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Описание справочников</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;