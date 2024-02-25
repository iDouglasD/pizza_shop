export type OrderStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

interface OrderStatusProps {
  status: OrderStatus
}

const orderStatusMap: Record<OrderStatus, string> = {
  pending: 'Pendente',
  canceled: 'Cancelado',
  processing: 'Em preparo',
  delivering: 'Em entrega',
  delivered: 'Entregue',
}

function colorByStatus(status: OrderStatus) {
  switch (status) {
    case 'pending':
      return 'bg-slate-400'
    case 'canceled':
      return 'bg-rose-500'
    case 'delivered':
      return 'bg-emerald-500'
    case 'processing':
    case 'delivering':
      return 'bg-amber-500'
  }
}

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      <span
        data-testid={`badge-${status}`}
        className={`h-2 w-2 rounded-full ${colorByStatus(status)}`}
      />
      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  )
}
