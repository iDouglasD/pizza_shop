import { Utensils } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function DayOrdersAmountCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (dia)</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <span className="text-2xl font-bold tracking-tight">18</span>
        <p className="text-xs text-muted-foreground">
          <span className="rose-emerald-500 dark:text-rose-400">-4%</span> em
          relação a ontem
        </p>
      </CardContent>
    </Card>
  )
}
