import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';
import { Modal } from '@redq/reuse-modal';
import { GET_LOGGED_IN_CUSTOMER } from '@shopApp/graphql/query/customer.query';
import { ProfileProvider } from '@shopApp/contexts/profile/profile.provider';
import SettingsContent from '@shopApp/containers/Profile/Settings/Settings';
import {
  PageWrapper,
  SidebarSection,
  ContentBox,
} from '@shopApp/containers/Profile/Profile.style';
import Sidebar from '@shopApp/containers/Profile/Sidebar/Sidebar';
import { SEO } from '@shopApp/components/seo';
import SiteFooter from '@shopApp/components/SiteFooter/SiteFooter';
import { FormattedMessage } from 'react-intl';
import { withApollo } from '@shopApp/helper/apollo';

type Props = {
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};
const ProfilePage: NextPage<Props> = ({ deviceType }) => {
  const { data, error, loading } = useQuery(GET_LOGGED_IN_CUSTOMER);
  if (!data || loading) {
    return <div>loading...</div>;
  }
  if (error) return <div>{error.message}</div>;
  return (
    <>
      <SEO
        title="Profile - PickBazar"
        description="Profile Details"
      />
      <ProfileProvider initData={data.me}>
        <Modal>
          <PageWrapper>
            <SidebarSection>
              <Sidebar />
            </SidebarSection>
            <ContentBox>
              <SettingsContent deviceType={deviceType} />
            </ContentBox>

            <SiteFooter style={{ marginTop: 50 }}>
              <FormattedMessage
                id="siteFooter"
                defaultMessage="Pickbazar is a product of"
              />
              &nbsp; <Link href="#">Redq, Inc.</Link>
            </SiteFooter>
          </PageWrapper>
        </Modal>
      </ProfileProvider>
    </>
  );
};

export default withApollo(ProfilePage);
