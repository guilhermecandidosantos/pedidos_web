'use client';

import { InputHTMLAttributes, useEffect, useState } from 'react';

export function Input(props: InputHTMLAttributes<HTMLElement>) {
  const [isRenderClient, setIsRenderClient] = useState(false);

  useEffect(() => {
    setIsRenderClient(true);
  }, []);

  let id;

  if (!isRenderClient) {
    return null;
  } else {
    id = Math.random().toString();
  }

  const idDiv = id.concat('div');

  const classFocus =
    "before:border-foreground after:border-foreground after:animate-input-focus-after before:animate-input-focus-before relative before:absolute before:bottom-[-5%] before:left-0 before:w-[50%] before:border-1 before:content-[''] after:absolute after:bottom-[-5%] after:left-[50%] after:w-[50%] after:border-1";

  const classFocusOut =
    "before:border-foreground after:border-foreground after:animate-input-focus-out-after before:animate-input-focus-out-before relative before:absolute before:bottom-[-5%] before:left-0 before:w-[50%] before:border-1 before:content-[''] after:absolute after:bottom-[-5%] after:left-[50%] after:w-[50%] after:border-1";

  const classFocusArray = classFocus.split(' ');
  const classFocusArrayOut = classFocusOut.split(' ');

  function addClassFocus(idDiv: string) {
    const element = document.getElementById(idDiv);
    if (element) {
      element.classList.remove(...classFocusArrayOut);
      element.classList.add(...classFocusArray);
    }
  }

  function removeClassFocus(idDiv: string) {
    const element = document.getElementById(idDiv);
    if (element) {
      element.classList.remove(...classFocusArray);
      element.classList.add(...classFocusArrayOut);
    }
  }

  return (
    <div
      id={idDiv}
      className={`${props.className} border-text-800 relative border-b-[1px]`}>
      <input
        id={id}
        {...props}
        onFocus={() => addClassFocus(idDiv)}
        onBlur={() => removeClassFocus(idDiv)}
      />
    </div>
  );
}
