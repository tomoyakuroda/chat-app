import React, { FormEvent, useRef } from "react";
import { api } from "../../lib/API";
import { Message } from "../../lib/types";

export interface SendMessagePages {
  conversationId: string;
  onNewMessage: (message: Message) => void;
}
export const SendMessage: React.FC<SendMessagePages> = ({
  conversationId,
  onNewMessage,
}) => {
  const input = useRef<HTMLInputElement>(null);
  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const message = await api.createMessages(
      conversationId,
      input.current?.value!
    );
    onNewMessage(message);
    input.current?.value = "";
  };
  return (
    <form onSubmit={submit}>
      <input type="text" ref={input} />
    </form>
  );
};
