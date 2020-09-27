import { GetStaticProps } from 'next'

import { getAllLeaders, ILeader } from '@/services/sanity/leader'

interface IProps {
  allLeaders: ILeader[]
}

export default function Leaders({ allLeaders }: IProps): JSX.Element {
  return (
    <>
      <h2>Leaders</h2>
      <ul>
        {allLeaders.map((leader) => (
          <li key={leader._id}>
            <span>{leader.name}</span>
          </li>
        ))}
      </ul>
    </>
  )
}

export const getStaticProps: GetStaticProps<IProps> = async () => {
  const allLeaders: ILeader[] = await getAllLeaders()

  return {
    props: { allLeaders },
  }
}
