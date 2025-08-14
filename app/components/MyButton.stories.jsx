import React from 'react';
import MyButton from './MyButton';

// لتعريف القصة وضبط الخصائص (args)
export default {
  title: 'Components/MyButton',
  component: MyButton,
  // إضافة تحكم بالخصائص (controls)
  argTypes: {
    label: { control: 'text' },         // نتحكم في نص الزر
    disabled: { control: 'boolean' },  // زر تعطيل/تفعيل
    onClick: { action: 'clicked' },    // action ترسل حدث عند النقر
  },
  // إضافة دعم الوصول (accessibility)
  parameters: {
    // التحقق من الـ a11y (اختبار إمكانية الوصول)
    a11y: {
      // تقدر تضيف إعدادات إضافية هنا لو حبيت
      element: '#my-button',
    },
  },
};

// قالب القصة لتسهيل التعامل مع الـ args
const Template = (args) => <MyButton {...args} id="my-button" />;

// القصة الافتراضية مع خاصية label (نص الزر)
export const Default = Template.bind({});
Default.args = {
  label: 'Click Me',
  disabled: false,
};

// قصة توضح تفاعل الزر المعطل
export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  disabled: true,
};
