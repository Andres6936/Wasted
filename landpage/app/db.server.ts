import { PrismaClient } from "@prisma/client";

import { singleton } from "./singleton.server";
import { createClient } from "@supabase/supabase-js";

// Hard-code a unique key, so we can look up the client when this module gets re-imported
const prisma = singleton("prisma", () => new PrismaClient());
prisma.$connect();

export { prisma };

const supabase = singleton("supabase", () => createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
  )
);

export { supabase };