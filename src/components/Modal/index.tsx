import { ReactNode } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

export default function Modal({ open, onClose, title, children }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
      <div className="relative w-full max-w-xl bg-gray-900 text-white rounded-md shadow-lg p-6">
        <button
          className="absolute top-2 right-2 text-green-400 hover:text-green-300"
          onClick={onClose}
        >
          X
        </button>
        {title && <h2 className="text-xl font-bold mb-4 text-green-400">{title}</h2>}
        <div className="max-h-[70vh] overflow-y-auto whitespace-pre-line">
          {children}
        </div>
      </div>
    </div>
  );
}
