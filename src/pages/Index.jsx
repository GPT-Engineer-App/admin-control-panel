import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Calendar, Home, Users, FileText, BookOpen } from "lucide-react";

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Добро пожаловать в систему управления</h1>
      <p className="mb-8">Здесь вы можете управлять событиями, объектами, компаниями, персоналом и просматривать системный журнал.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex items-center justify-between">
            <div className="flex flex-col">
              <div className="flex items-center">
                <Calendar className="mr-2 h-6 w-6" />
                <CardTitle>События</CardTitle>
              </div>
              <p className="ml-8 text-muted-foreground">Просмотр и управление событиями</p>
            </div>
            <div className="flex items-center">
              <p className="text-3xl font-bold mr-2">24</p>
            </div>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="flex items-center justify-between">
            <div className="flex flex-col">
              <div className="flex items-center">
                <Building className="mr-2 h-6 w-6" />
                <CardTitle>Объекты</CardTitle>
              </div>
              <p className="ml-8 text-muted-foreground">Просмотр и управление объектами</p>
            </div>
            <div className="flex items-center">
              <p className="text-3xl font-bold mr-2">87</p>
            </div>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="flex items-center justify-between">
            <div className="flex flex-col">
              <div className="flex items-center">
                <Home className="mr-2 h-6 w-6" />
                <CardTitle>Компании</CardTitle>
              </div>
              <p className="ml-8 text-muted-foreground">Просмотр и управление компаниями</p>
            </div>
            <div className="flex items-center">
              <p className="text-3xl font-bold mr-2">12</p>
            </div>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="flex items-center justify-between">
            <div className="flex flex-col">
              <div className="flex items-center">
                <Users className="mr-2 h-6 w-6" />
                <CardTitle>Персонал</CardTitle>
              </div>
              <p className="ml-8 text-muted-foreground">Просмотр и управление персоналом</p>
            </div>
            <div className="flex items-center">
              <p className="text-3xl font-bold mr-2">143</p>
            </div>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="flex items-center justify-between">
            <div className="flex flex-col">
              <div className="flex items-center">
                <FileText className="mr-2 h-6 w-6" />
                <CardTitle>Системный журнал</CardTitle>
              </div>
              <p className="ml-8 text-muted-foreground">Просмотр системного журнала</p>
            </div>
            <div className="flex items-center">
              <p className="text-3xl font-bold mr-2">1,256</p>
            </div>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="flex items-center justify-between">
            <div className="flex flex-col">
              <div className="flex items-center">
                <BookOpen className="mr-2 h-6 w-6" />
                <CardTitle>Справочники</CardTitle>
              </div>
              <p className="ml-8 text-muted-foreground">Просмотр и управление справочниками</p>
            </div>
            <div className="flex items-center">
              <p className="text-3xl font-bold mr-2">25</p>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default Index;