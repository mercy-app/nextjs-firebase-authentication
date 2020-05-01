import React from 'react';
import { SEO } from '@shopApp/components/seo';
import OrderRecivedPage from '@shopApp/containers/OrderReceived/OrderReceived';
import { withApollo } from '@shopApp/helper/apollo';

class OrderRecived extends React.Component<any> {
  public render() {
    return (
      <>
        <SEO
          title="Invoice - PickBazar"
          description="Invoice Details"
        />
        <OrderRecivedPage />
      </>
    );
  }
}

export default withApollo(OrderRecived);
