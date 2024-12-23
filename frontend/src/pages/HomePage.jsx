import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "@nextui-org/react";
import { useUser } from "../contexts/UserContext";

export default function HomePage() {
  const [name, setName] = useState("");
  const { setUsername } = useUser();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (name.trim()) {
      setUsername(name);
      navigate("/chat");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Bem-vindo ao Chat!</h1>
      <Input
        label="Digite seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mb-4 w-64"
      />
      <Button color="primary" onPress={handleSubmit}>
        Entrar no Chat
      </Button>
    </div>
  );
}
