import { api } from '@/lib/axios'

interface DeliverOrderParams {
  orderId: string
}

export async function deliverOrder({ orderId }: DeliverOrderParams) {
  return await api.patch(`/orders/${orderId}/deliver`)
}
