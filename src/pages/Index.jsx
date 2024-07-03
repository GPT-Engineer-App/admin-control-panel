import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Calendar, Home, Users, FileText, BookOpen } from "lucide-react";

const Index = () => {
  return (
    <div className="grid gap-4">
      <Card>
        <CardHeader>
          <CardTitle>
            <Calendar className="mr-2 h-6 w-6" />
            События
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xl font-bold">0</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>
            <Building className="mr-2 h-6 w-6" />
            Объекты
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xl font-bold">0</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>
            <Home className="mr-2 h-6 w-6" />
            Компании
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xl font-bold">0</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>
            <Users className="mr-2 h-6 w-6" />
            Персонал
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xl font-bold">0</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>
            <FileText className="mr-2 h-6 w-6" />
            Системный журнал
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xl font-bold">0</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>
            <BookOpen className="mr-2 h-6 w-6" />
            Справочники
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xl font-bold">0</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;