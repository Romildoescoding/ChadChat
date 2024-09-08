import supabase, { supabaseURL } from "./supabase";

export async function getUsers() {
  const { data, error } = await supabase.from("users").select("*");
  if (error) throw new Error(error.message);
  return data;
}
// created_at: "2024-04-03T18:47:51.803678+00:00"
// id: 1
// image: null
// message: "Hello Rishi"
// receiverID: 7
// senderId: 5

export async function getChats({ senderId, receiverID }) {
  // const { data: data2, error } = await supabase
  //   .from("chats")
  //   .select("*")
  //   .eq("senderId", senderId);

  // const { data, error } = await supabase
  //   .from("chats")
  //   .select("*")
  //   .eq("receiverID", senderId);
  // console.log("senderID=" + senderId);
  // console.log(data);

  const { data, error } = await supabase
    .from("chats")
    .select("*")
    .or(`senderId.eq.${senderId},receiverID.eq.${senderId}`);

  // const chats = data.filter((chat) => {
  //   console.log(chat.receiverID);
  //   return chat.receiverID === receiverID;
  // });

  if (error) throw new Error(error.message);
  return data;
}

export async function getSpecificChats({ senderId, receiverID }) {
  const { data, error } = await supabase
    .from("chats")
    .select("*")
    .match({ senderId, receiverID });
  if (error) throw new Error(error.message);
  return data;
}

export async function sendMessage({ message, image, senderId, receiverID }) {
  //https://vnaajjnonmlnjebrciqh.supabase.co/storage/v1/object/public/chat-images/chad-light.png?t=2024-04-05T05%3A58%3A36.967Z
  let query = supabase.from("chats");

  if (image) {
    //Upload image to the storage
    console.log("UPLOADING IMAGE...");
    const fileName = `${Math.random()}-${image.name}`.replaceAll("/", "");
    const imagePath = `${supabaseURL}/storage/v1/object/public/chat-images/${fileName}`;

    const { error: storageError } = await supabase.storage
      .from("chat-images")
      .upload(fileName, image);

    if (storageError) throw new Error(storageError.message);
    console.log("UPLOADED TO STORAGE BUCKET");

    query = await query.insert({ image: imagePath, senderId, receiverID });
  }

  //If no image
  else query = await query.insert({ message, senderId, receiverID });
  const { data, error } = query;

  if (error) throw new Error(error.message);
  return data;
}

export async function deleteMessage({ id }) {
  const { error } = await supabase.from("chats").delete().eq("id", id);

  if (error) throw new Error(error.message);
}
