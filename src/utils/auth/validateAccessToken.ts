import { GraphQLClientSingleton } from 'app/graphql'
import { cookies } from 'next/headers'
import { customerName } from 'app/graphql/queries/customerName'

  
 
export const validateAccessToken = async () => {
  try {
    const cookieStore = cookies()
    const accessToken = cookieStore.get('accessToken')?.value || ''
    const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
    const { customer }: {
      customer: {
        firstName: string
        email: string
      }
    } = await graphqlClient.request(customerName, {
      customerAccessToken: accessToken
    })
    return customer
  } catch (error) {
  }
}