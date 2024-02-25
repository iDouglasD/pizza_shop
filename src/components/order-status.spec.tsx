import { render } from '@testing-library/react'

import { OrderStatus } from './order-status'

describe('Order Status', () => {
  it('should display the right text based on order status', () => {
    let wrapper = render(<OrderStatus status="pending" />)

    /* Pending */
    let statusText = wrapper.getByText('Pendente')
    let badgeElement = wrapper.getByTestId('badge-pending')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-slate-400')

    /* Canceled */
    wrapper = render(<OrderStatus status="canceled" />)
    statusText = wrapper.getByText('Cancelado')
    badgeElement = wrapper.getByTestId('badge-canceled')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-rose-500')

    /* Processing */
    wrapper = render(<OrderStatus status="processing" />)
    statusText = wrapper.getByText('Em preparo')
    badgeElement = wrapper.getByTestId('badge-processing')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-amber-500')

    /* Delivering */
    wrapper = render(<OrderStatus status="delivering" />)
    statusText = wrapper.getByText('Em entrega')
    badgeElement = wrapper.getByTestId('badge-delivering')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-amber-500')

    /* Delivered */
    wrapper = render(<OrderStatus status="delivered" />)
    statusText = wrapper.getByText('Entregue')
    badgeElement = wrapper.getByTestId('badge-delivered')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-emerald-500')
  })
})
