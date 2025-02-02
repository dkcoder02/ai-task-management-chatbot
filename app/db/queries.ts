import prisma from "./prisma";

export async function getChatById({ id }: { id: string }) {
  try {
    const selectedChat = await prisma.chat.findFirst({
      where: {
        id,
      },
    });
    return selectedChat;
  } catch (error) {
    console.error("Failed to get chat:", error);
    throw error;
  }
}
