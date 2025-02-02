import { CoreMessage } from "ai";
import { notFound } from "next/navigation";
import { Chat as PreviewChat } from "@/components/custom/chat";
import { convertToUIMessages } from "@/lib/utils";
import { getChatById } from "@/app/db/queries";

export default async function Page({ params }: { params: any }) {
  const { id } = params;
  const chatFromDb = await getChatById({ id });

  if (!chatFromDb) {
    notFound();
  }

  const chat = {
    ...chatFromDb,
    messages: convertToUIMessages(chatFromDb.messages as Array<CoreMessage>),
  };

  return <PreviewChat id={chat.id} initialMessages={chat.messages} />;
}
