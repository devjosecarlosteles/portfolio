import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const mailto = `mailto:devjosecarlosteles@gmail.com?subject=Contato%20via%20Portfolio&body=Nome:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0AMensagem:%20${encodeURIComponent(message)}`;
    window.location.href = mailto;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full max-w-md">
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 rounded bg-gray-800 text-white"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 rounded bg-gray-800 text-white"
        required
      />
      <textarea
        placeholder="Mensagem"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="p-2 rounded bg-gray-800 text-white"
        required
      />
      <button
        type="submit"
        className="rounded-full p-2 text-sm font-bold bg-transparent border-2 border-green-500 text-green-500 hover:text-white hover:bg-green-500"
      >
        Enviar
      </button>
    </form>
  );
}
