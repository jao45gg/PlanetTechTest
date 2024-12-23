import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();
  console.error(error);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Oops! Alguma coisa deu errado.
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Nos desculpamos pelo incoveniente.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-yellow-300 text-black font-black rounded-md shadow-md hover:bg-yellow-400 focus:outline-none focus:ring focus:ring-blue-400"
      >
        Voltar ao início
      </button>
    </div>
  );
}
