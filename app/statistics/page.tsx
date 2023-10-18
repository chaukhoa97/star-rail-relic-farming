import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

async function getData() {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  const { data, error } = await supabase.from('rates').select()

  if (error) {
    throw error
  }

  return { data, error }
}

export default async function Page() {
  const { data } = await getData()

  return <div>{JSON.stringify(data)}</div>
}
