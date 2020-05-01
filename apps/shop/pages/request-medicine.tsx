import React from 'react';
import { NextPage } from 'next';
import { useQuery } from '@apollo/react-hooks';
import { Modal } from '@redq/reuse-modal';
import { withApollo } from '@shopApp/helper/apollo';
import { SEO } from '@shopApp/components/seo';
import RequestMedicine from '@shopApp/containers/RequestMedicine/RequestMedicine';
import { GET_LOGGED_IN_CUSTOMER } from '@shopApp/graphql/query/customer.query';

import { ProfileProvider } from '@shopApp/contexts/profile/profile.provider';

type Props = {
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};
const RequestMedicinePage: NextPage<Props> = ({ deviceType }) => {
  const { data, error, loading } = useQuery(GET_LOGGED_IN_CUSTOMER);
  if (loading) {
    return <div>loading...</div>;
  }
  if (error) return <div>{error.message}</div>;
  const token = true;

  return (
    <>
      <SEO
        title="Request Medicine - PickBazar"
        description="Request Medicine Details"
      />
      <ProfileProvider initData={data.me}>
        <Modal>
          <RequestMedicine token={token} deviceType={deviceType} />
        </Modal>
      </ProfileProvider>
    </>
  );
};

export default withApollo(RequestMedicinePage);
