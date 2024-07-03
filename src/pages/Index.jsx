import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Calendar, Home, Users, FileText, BookOpen } from "lucide-react";

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Добро пожаловать в систему управления</h1>
      <p className="mb-8">Здесь вы можете управлять событиями, объектами, компаниями, персоналом и просматривать системный журнал.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-col items-center justify-center">
            <CardTitle className="text-center">События</CardTitle>
            <div className="flex items-center mt-2">
              <p className="text-3xl font-bold mr-2">24</p>
              <Calendar className="h-6 w-6" />
            </div>
            <p className="text-muted-foreground">Просмотр и управление событиями</p>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="flex flex-col items-center justify-center">
            <CardTitle className="text-center">Объекты</CardTitle>
            <div className="flex items-center mt-2">
              <p className="text-3xl font-bold mr-2">87</p>
              <Building className="h-6 w-6" />
            </div>
            <p className="text-muted-foreground">Просмотр и управление объектами</p>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="flex flex-col items-center justify-center">
            <CardTitle className="text-center">Компании</CardTitle>
            <div className="flex items-center mt-2">
              <p className="text-3xl font-bold mr-2">12</p>
              <Home className="h-6 w-6" />
            </div>
            <p className="text-muted-foreground">Просмотр и управление компаниями</p>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="flex flex-col items-center justify-center">
            <CardTitle className="text-center">Персонал</CardTitle>
            <div className="flex items-center mt-2">
              <p className="text-3xl font-bold mr-2">143</p>
              <Users className="h-6 w-6" />
            </div>
            <p className="text-muted-foreground">Просмотр и управление персоналом</p>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="flex flex-col items-center justify-center">
            <CardTitle className="text-center">Системный журнал</CardTitle>
            <div className="flex items-center mt-2">
              <p className="text-3xl font-bold mr-2">1,256</p>
              <FileText className="h-6 w-6" />
            </div>
            <p className="text-muted-foreground">Просмотр системного журнала</p>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="flex flex-col items-center justify-center">
            <CardTitle className="text-center">Справочники</CardTitle>
            <div className="flex items-center mt-2">
              <p className="text-3xl font-bold mr-2">25</p>
              <BookOpen className="h-6 w-6" />
            </div>
            <p className="text-muted-foreground">Просмотр и управление справочниками</p>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default Index;