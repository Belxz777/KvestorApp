'use client';

import type { PropsWithChildren } from 'react';
import { SDKProvider, DisplayGate } from '@tma.js/sdk-react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from 'next/router';

interface SDKProviderErrorProps {
  error: unknown;
}
const router= useRouter()
function SDKProviderError({ error }: SDKProviderErrorProps) {
  return (
    <div>

  <h1 className=' text-center font-extrabold  text-link-base text-xl  '>
  <button className=" bg-button-base hover:bg-hint-base text-button-base font-bold py-2 px-4 rounded-full text-xl flex" onClick={()=> router.push(`/`)}>
<AiOutlineArrowLeft  />
Обратно на главную
</button>
Ууп что то пошло не так  ... <br/>
Если что приложение запукается только через telegram)

</h1>
      <blockquote>
        <code className=' text-center font-extrabold text-link-base text-xl  '>
          {error instanceof Error
            ? error.message
            : JSON.stringify(error)}
        </code>
      </blockquote>
    </div>
  );
}

function SDKProviderLoading() {
  return(
    <h1 className=' text-center font-extrabold text-link-base text-xl  '>
      Загрузка ...
  </h1>)
}

function SDKInitialState() {
  return(
  <h1 className=' text-center font-extrabold text-link-base text-xl  '>
Ждем инициализации для начала ...
</h1>)
}

/**
 * Root component of the whole project.
 */
export function TmaSDKLoader({ children }: PropsWithChildren) {
  return (
    <SDKProvider options={{ cssVars: true, acceptCustomStyles: true, async: true }}>
      <DisplayGate
        error={SDKProviderError}
        loading={SDKProviderLoading}
        initial={SDKInitialState}
      >
        {children}
      </DisplayGate>
    </SDKProvider>
  );
}
