import supabase from "./supabase";

export async function signup({ username, email, password }) {
  const { data, error: signupError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { username },
    },
  });

  if (signupError)
    throw new Error("Error while signup AUTH " + signupError.message);

  //Default user file
  const avatar =
    "https://vnaajjnonmlnjebrciqh.supabase.co/storage/v1/object/sign/avatars/default-chad.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL2RlZmF1bHQtY2hhZC5wbmciLCJpYXQiOjE3MTI0OTU0MzksImV4cCI6MTc0NDAzMTQzOX0.Y-iGf1JEg9U5TRLqiNqPGyJeUAnPRLe5z792areLqDo&t=2024-04-07T13%3A10%3A40.229Z";

  const { error } = await supabase
    .from("users")
    .insert({ username, email, password, avatar });

  if (error) throw new Error("Error while signup table" + error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session, isLoading } = await supabase.auth.getSession();
  if (!session) return null;

  const { data, error } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);

  return data?.user;
}

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  return data;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
