import { Rate } from "antd";
import { useState } from "react";

export default function LibraryStarPage() {
  const [value, setValue] = useState(2);

  const handleChange = (value: any) => {
    setValue(value);
  };

  return <Rate onChange={handleChange} value={value} />;
}
