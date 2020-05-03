import React from 'react';
import ImageUploader from '@tripApp/components/UI/ImageUploader/ImageUploader';
import Button from '@tripApp/components/UI/Antd/Button/Button';
import Heading from '@tripApp/components/UI/Heading/Heading';
import {
  AgentPictureUploader,
  FormTitle,
} from './AccountSettings.style';

export default function AgentPictureChangeForm() {
  return (
    <AgentPictureUploader>
      <FormTitle>Profile Images</FormTitle>
      <Heading content="Cover Image" as="h4" />
      <ImageUploader />
      <Heading content="Profile Image" as="h4" />
      <ImageUploader />

      <div className="submit-container">
        <Button htmlType="submit" type="primary">
          Save Changes
        </Button>
      </div>
    </AgentPictureUploader>
  );
}
