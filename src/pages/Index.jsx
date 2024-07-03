import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Calendar, Home, Users, FileText, BookOpen } from "lucide-react";
import Spinner from "@/components/ui/Spinner";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate loading time

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Добро пожаловать в систему управления</h1>
      <p className="mb-8">Здесь вы можете управлять событиями, объектами, компаниями, персоналом и просматривать системный журнал.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="bg-[#fbfbfb] border-2 border-gray-300">
          <CardHeader className="flex flex-col items-center justify-center">
            <CardTitle className="text-center">События</CardTitle>
            <p className="text-muted-foreground mt-2">Просмотр и управление событиями</p>
            <div className="flex items-center mt-2">
              <p className="text-3xl font-bold mr-2">24</p>
              <Calendar className="h-6 w-6 text-[#6e6e77]" />
            </div>
          </CardHeader>
        </Card>
        <Card className="bg-[#fbfbfb] border-2 border-gray-300">
          <CardHeader className="flex flex-col items-center justify-center">
            <CardTitle className="text-center">Объекты</CardTitle>
            <p className="text-muted-foreground mt-2">Просмотр и управление объектами</p>
            <div className="flex items-center mt-2">
              <p className="text-3xl font-bold mr-2">87</p>
              <Building className="h-6 w-6 text-[#6e6e77]" />
            </div>
          </CardHeader>
        </Card>
        <Card className="bg-[#fbfbfb] border-2 border-gray-300">
          <CardHeader className="flex flex-col items-center justify-center">
            <CardTitle className="text-center">Компании</CardTitle>
            <p className="text-muted-foreground mt-2">Просмотр и управление компаниями</p>
            <div className="flex items-center mt-2">
              <p className="text-3xl font-bold mr-2">12</p>
              <Home className="h-6 w-6 text-[#6e6e77]" />
            </div>
          </CardHeader>
        </Card>
        <Card className="bg-[#fbfbfb] border-2 border-gray-300">
          <CardHeader className="flex flex-col items-center justify-center">
            <CardTitle className="text-center">Персонал</CardTitle>
            <p className="text-muted-foreground mt-2">Просмотр и управление персоналом</p>
            <div className="flex items-center mt-2">
              <p className="text-3xl font-bold mr-2">143</p>
              <Users className="h-6 w-6 text-[#6e6e77]" />
            </div>
          </CardHeader>
        </Card>
        <Card className="bg-[#fbfbfb] border-2 border-gray-300">
          <CardHeader className="flex flex-col items-center justify-center">
            <CardTitle className="text-center">Системный журнал</CardTitle>
            <p className="text-muted-foreground mt-2">Просмотр системного журнала</p>
            <div className="flex items-center mt-2">
              <p className="text-3xl font-bold mr-2">1,256</p>
              <FileText className="h-6 w-6 text-[#6e6e77]" />
            </div>
          </CardHeader>
        </Card>
        <Card className="bg-[#fbfbfb] border-2 border-gray-300">
          <CardHeader className="flex flex-col items-center justify-center">
            <CardTitle className="text-center">Справочники</CardTitle>
            <p className="text-muted-foreground mt-2">Просмотр и управление справочниками</p>
            <div className="flex items-center mt-2">
              <p className="text-3xl font-bold mr-2">25</p>
              <BookOpen className="h-6 w-6 text-[#6e6e77]" />
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default Index;