import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Calendar, Home, Users, FileText, BookOpen } from "lucide-react";

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Добро пожаловать в систему управления</h1>
      <p className="mb-8">Здесь вы можете управлять событиями, объектами, компаниями, персоналом и просматривать системный журнал.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex items-center">
            <Calendar className="mr-2 h-6 w-6" />
            <CardTitle>События</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-bold">24</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex items-center">
            <Building className="mr-2 h-6 w-6" />
            <CardTitle>Объекты</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-bold">87</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex items-center">
            <Home className="mr-2 h-6 w-6" />
            <CardTitle>Компании</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-bold">12</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex items-center">
            <Users className="mr-2 h-6 w-6" />
            <CardTitle>Персонал</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-bold">143</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex items-center">
            <FileText className="mr-2 h-6 w-6" />
            <CardTitle>Системный журнал</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-bold">1,256</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex items-center">
            <BookOpen className="mr-2 h-6 w-6" />
            <CardTitle>Справочники</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-bold">25</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;