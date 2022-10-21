const orders = [

  {
    id: 1,
    status:"completed"
  },
  {
    id: 2,
    status:"peding"
  },
  {
    id: 3,
    status:"canceled"
  },
  {
    id: 4,
    status:"canceled"
  },
]


//Count ocurrences

const countOrders = orders.reduce((acc, order) => {
  return { ...acc, [order.status]: (acc[order.status] || 0) + 1 };
}, {});

// Count canceled orders

const canceledOrders = orders.reduce((acc, order) => {
  
  if (order.status = "canceled") {
    return { ...acc, [order.status]: (acc[order.status] || 0) + 1 };
  }
  return null;
}, {})
