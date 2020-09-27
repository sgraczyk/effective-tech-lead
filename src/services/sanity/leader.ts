import { SanityDocument } from '@sanity/client'

import client from './client'

export interface ILeader extends SanityDocument {
  name: string
}

export async function getAllLeaders(): Promise<ILeader[]> {
  return await client.fetch(`*[_type=="leader"] | order(name asc)`)
}
