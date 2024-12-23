import { useState, useEffect } from "react";
import { Input, Button, Card } from "@nextui-org/react";
import { useUser } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function ChatPage() {
  const apiUrl = import.meta.env.VITE_API_URL;

  const INTERVAL = 5000;
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const { username } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!username) {
      navigate("/");
    }

    const fetchMessages = async () => {
      const response = await fetch(`${apiUrl}/messages`);
      const data = await response.json();
      setMessages(data);
    };

    fetchMessages();
    const interval = setInterval(fetchMessages, INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const sendMessage = async () => {
    if (newMessage.trim()) {
      const payload = {
        id: crypto.randomUUID(),
        content: newMessage,
        sender: username,
        timestamp: new Date().toISOString(),
      };

      await fetch(`${apiUrl}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setNewMessage("");

      const updatedMessages = await fetch(`${apiUrl}/messages`).then((res) =>
        res.json()
      );
      setMessages(updatedMessages);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Chat</h1>
      <div className="flex flex-col w-full max-w-md p-2 space-y-4 overflow-y-auto">
        {messages.map((msg) => (
          <Card
            shadow="sm"
            key={msg.id}
            className={`p-4 ${
              msg.sender === username ? "bg-blue-100 self-end" : "bg-gray-100"
            }`}
          >
            <p className="text-sm font-semibold">{msg.sender}</p>
            <p>{msg.content}</p>
            <span className="text-xs text-gray-500">
              {new Date(msg.timestamp).toLocaleString()}
            </span>
          </Card>
        ))}
      </div>
      <div className="flex w-full max-w-md mt-4">
        <Input
          fullWidth
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Digite sua mensagem"
          className="mr-2"
        />
        <Button color="primary" onPress={sendMessage}>
          Enviar
        </Button>
      </div>
    </div>
  );
}
