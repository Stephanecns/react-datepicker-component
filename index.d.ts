declare module 'react-datepicker-component-stephoc' {
    import { FC } from 'react';
  
    interface CustomDatePickerProps {
      label: string;
      selectedDate: Date | null;
      onChange: (date: Date | null) => void;
      className?: string;
    }
  
    const CustomDatePicker: FC<CustomDatePickerProps>;
  
    export default CustomDatePicker;
  }
  