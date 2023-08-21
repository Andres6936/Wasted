import { supabase } from "~/db.server";

type Service = {
  User: string,
  Email: string,
  Address: string,
  SocialClass: number,
  Quote: string,
}


export async function createService(service: Service) {
  return supabase.from('Services').insert(service);
}